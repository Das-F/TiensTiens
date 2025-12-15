# ModalPopUp

Composant React léger et réutilisable pour afficher une modale (dialog). Conçu pour être exporté en package NPM et personnalisé facilement.

## Principes

- API minimale et composable : `isOpen` / `onClose` contrôlent l'affichage.
- Contenu fourni via `children` (préféré). `message` et `title` pour usage simple.
- Personnalisation via `classNames` (chaînes de classes) et `styles` (objets inline).
- Accessibilité prise en charge : role `dialog`, gestion `Escape`.

## Installation

npm:

```
npm install modal-react-popup
```

## Quick start

```jsx
import { useState } from "react";
import ModalPopUp from "modal-react-popup";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <ModalPopUp isOpen={open} onClose={() => setOpen(false)}>
        Hello !
      </ModalPopUp>
    </>
  );
}
```

## Import

```jsx
import ModalPopUp from "modal-react-popup";
```

## Props (API)

- `isOpen` (bool) — contrôle l'affichage de la modale.
- `onClose` (func) — callback appelé quand la modale doit se fermer.
- `children` (node) — contenu principal (préféré).
- `title` (node) — titre optionnel.
- `message` (string|node) — message simple si pas de `children`.
- `classNames` (object) — override de classes : `{ overlay, modal, header, content, footer, closeButton }`.
- `styles` (object) — overrides inline pour les mêmes parties.
- `closeOnOverlayClick` (bool) — fermer quand on clique sur l'overlay (par défaut true).
- `closeOnEsc` (bool) — fermer avec la touche Échap (par défaut true).
- `showCloseButton` (bool) — afficher le bouton fermer (par défaut true).
- `portalSelector` (string) — selecteur CSS pour le portal (par défaut `body`).
- `ariaLabel` (string) — label ARIA pour la modale.

## Exemple d'utilisation

Affichage simple :

```jsx
const [open, setOpen] = useState(false);

<ModalPopUp isOpen={open} onClose={() => setOpen(false)} message="Enregistré !" />;
```

Contenu personnalisé :

```jsx
<ModalPopUp isOpen={open} onClose={close} title={<strong>Confirmer</strong>}>
  <div>
    <p>Votre employé a bien été créé.</p>
    <button onClick={close}>Fermer</button>
  </div>
</ModalPopUp>
```

Override de style / classes :

```jsx
<ModalPopUp isOpen={open} onClose={close} classNames={{ modal: "my-modal-class" }} styles={{ modal: { maxWidth: 700 } }}>
  ...
</ModalPopUp>
```

## CSS et theming

Le CSS par défaut est automatiquement inclus lors de l’import du composant.

- Le package fournit un CSS par défaut (`modal`, `modal-overlay`, `modal-content`, `modal-close`, ...).
- Option `classNames` permet de substituer vos propres classes si vous préférez gérer entièrement le style.

## Peer dependencies

- react >= 18
- react-dom >= 18
