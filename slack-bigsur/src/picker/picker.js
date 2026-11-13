'use strict';

(async () => {
  const $ = (id) => document.getElementById(id);
  const data = await window.picker.init();
  if (!data) {
    window.picker.choose(null);
    return;
  }

  const { strings, sources, permissionMissing } = data;
  document.title = strings.title;
  $('title').textContent = strings.title;
  $('screens-heading').textContent = strings.screens;
  $('windows-heading').textContent = strings.windows;
  $('share').textContent = strings.share;
  $('cancel').textContent = strings.cancel;
  $('empty').textContent = strings.empty;

  if (permissionMissing) {
    $('permission').hidden = false;
    $('permission-text').textContent = strings.permissionHint;
    $('open-settings').textContent = strings.openSettings;
    $('open-settings').addEventListener('click', () => window.picker.openSettings());
  }

  let selectedId = null;
  const cards = [];

  const select = (id) => {
    selectedId = id;
    for (const card of cards) card.setAttribute('aria-selected', String(card.dataset.id === id));
    $('share').disabled = !selectedId;
  };

  const share = () => {
    if (selectedId) window.picker.choose(selectedId);
  };

  const render = (kind, container, section) => {
    const items = sources.filter((source) => source.kind === kind);
    section.hidden = items.length === 0;
    for (const source of items) {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'source';
      card.dataset.id = source.id;
      card.setAttribute('role', 'option');
      card.setAttribute('aria-selected', 'false');

      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      if (source.thumbnail) {
        const img = document.createElement('img');
        img.src = source.thumbnail;
        img.alt = '';
        thumb.append(img);
      }

      const label = document.createElement('div');
      label.className = 'label';
      if (source.icon) {
        const icon = document.createElement('img');
        icon.src = source.icon;
        icon.alt = '';
        label.append(icon);
      }
      const name = document.createElement('span');
      name.textContent = source.name;
      name.title = source.name;
      label.append(name);

      card.append(thumb, label);
      card.addEventListener('click', () => select(source.id));
      card.addEventListener('dblclick', () => {
        select(source.id);
        share();
      });
      container.append(card);
      cards.push(card);
    }
  };

  render('screen', $('screens'), $('screens-section'));
  render('window', $('windows'), $('windows-section'));
  $('empty').hidden = cards.length > 0;

  $('share').addEventListener('click', share);
  $('cancel').addEventListener('click', () => window.picker.choose(null));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      window.picker.choose(null);
      return;
    }
    if (event.key !== 'Enter') return;
    const focused = document.activeElement;
    const focusedCard = focused && focused.classList.contains('source') ? focused : null;
    if (focused && focused.tagName === 'BUTTON' && !focusedCard) return;
    if (focusedCard) select(focusedCard.dataset.id);
    if (selectedId) {
      event.preventDefault();
      share();
    }
  });

  if (cards.length === 1) select(cards[0].dataset.id);
  if (cards[0]) cards[0].focus();
})();
