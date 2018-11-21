export const BASIC_DARK_THEME_TEMPLATE = `
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-ripple-element {
  background-color: rgba(255, 255, 255, 0.1); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option {
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option:hover:not(.mat-option-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option:focus:not(.mat-option-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option:hover:not(.mat-option-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option:focus:not(.mat-option-disabled) {
    background: rgba(255, 255, 255, 0.04); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {
    background: rgba(255, 255, 255, 0.04); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option.mat-active, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option.mat-active {
    background: rgba(255, 255, 255, 0.04);
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option.mat-option-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-option.mat-option-disabled {
    color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-option.mat-selected:not(.mat-option-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
  color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-option.mat-selected:not(.mat-option-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {
  color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-option.mat-selected:not(.mat-option-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-optgroup-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-optgroup-label {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-optgroup-disabled .mat-optgroup-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-optgroup-disabled .mat-optgroup-label {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox {
  color: rgba(255, 255, 255, 0.7); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox::after {
    color: #303030; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox-checked,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox-indeterminate,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-pseudo-checkbox-checked,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-pseudo-checkbox-indeterminate, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox-checked,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox-indeterminate,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-pseudo-checkbox-checked,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-pseudo-checkbox-indeterminate {
  background: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-pseudo-checkbox-checked,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-pseudo-checkbox-indeterminate, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-pseudo-checkbox-checked,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-pseudo-checkbox-indeterminate {
  background: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-pseudo-checkbox-checked,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-pseudo-checkbox-indeterminate, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-pseudo-checkbox-checked,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-pseudo-checkbox-indeterminate {
  background: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled {
  background: #686868; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z0, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z0 {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z1, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z2, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z3, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z4, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z5, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z6, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z7, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z8, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z9, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z10, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z11, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z12, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z13, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z14, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z15, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z16, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z17, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z18, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z19, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z20, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z21, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z22, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z23, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z24, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-elevation-z24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-app-background, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]).mat-app-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-app-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]).mat-app-background {
  background-color: #303030;
  color: white; }

.mat-theme-loaded-marker {
  display: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel {
  background: #424242;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel:not([class*='mat-elevation-z']) {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {
    background: #424242; }
    li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {
      color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-content {
  color: white;
  background: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-accent .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-accent .mat-badge-content {
  background: %accent-color-500%;
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-warn .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-warn .mat-badge-content {
  color: white;
  background: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge {
  position: relative; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-hidden .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-hidden .mat-badge-content {
  display: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-disabled .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-disabled .mat-badge-content {
  background: #6e6e6e;
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-content.mat-badge-active, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-content.mat-badge-active {
  transform: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small .mat-badge-content {
  width: 16px;
  height: 16px;
  line-height: 16px; }
  @media screen and (-ms-high-contrast: active) {
    li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small .mat-badge-content {
      outline: solid 1px;
      border-radius: 0; } }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-above .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-above .mat-badge-content {
  top: -8px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-below .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-below .mat-badge-content {
  bottom: -8px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-before .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-before .mat-badge-content {
  left: -16px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-before .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-before .mat-badge-content {
  left: auto;
  right: -16px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-after .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-after .mat-badge-content {
  right: -16px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-after .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-after .mat-badge-content {
  right: auto;
  left: -16px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {
  left: -8px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {
  left: auto;
  right: -8px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {
  right: -8px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {
  right: auto;
  left: -8px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium .mat-badge-content {
  width: 22px;
  height: 22px;
  line-height: 22px; }
  @media screen and (-ms-high-contrast: active) {
    li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium .mat-badge-content {
      outline: solid 1px;
      border-radius: 0; } }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-above .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-above .mat-badge-content {
  top: -11px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-below .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-below .mat-badge-content {
  bottom: -11px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-before .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-before .mat-badge-content {
  left: -22px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-before .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-before .mat-badge-content {
  left: auto;
  right: -22px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-after .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-after .mat-badge-content {
  right: -22px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-after .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-after .mat-badge-content {
  right: auto;
  left: -22px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {
  left: -11px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {
  left: auto;
  right: -11px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {
  right: -11px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {
  right: auto;
  left: -11px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large .mat-badge-content {
  width: 28px;
  height: 28px;
  line-height: 28px; }
  @media screen and (-ms-high-contrast: active) {
    li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large .mat-badge-content {
      outline: solid 1px;
      border-radius: 0; } }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-above .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-above .mat-badge-content {
  top: -14px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-below .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-below .mat-badge-content {
  bottom: -14px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-before .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-before .mat-badge-content {
  left: -28px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-before .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-before .mat-badge-content {
  left: auto;
  right: -28px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-after .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-after .mat-badge-content {
  right: -28px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-after .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-after .mat-badge-content {
  right: auto;
  left: -28px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {
  left: -14px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {
  left: auto;
  right: -14px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {
  right: -14px; }

[dir='rtl'] li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content, [dir='rtl'] * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {
  right: auto;
  left: -14px; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-bottom-sheet-container, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  background: #424242;
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button {
  color: inherit;
  background: transparent; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-primary {
    color: %primary-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-accent {
    color: %accent-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-warn {
    color: %warn-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button[disabled][disabled] {
    color: rgba(255, 255, 255, 0.3); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-primary .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-primary .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-primary .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-primary .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-primary .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-primary .mat-button-focus-overlay {
    background-color: %primary-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-accent .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-accent .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-accent .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-accent .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-accent .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-accent .mat-button-focus-overlay {
    background-color: %accent-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-warn .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-warn .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-warn .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button.mat-warn .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button.mat-warn .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button.mat-warn .mat-button-focus-overlay {
    background-color: %warn-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button[disabled] .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-button-focus-overlay, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button[disabled] .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button[disabled] .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button[disabled] .mat-button-focus-overlay {
    background-color: transparent; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button .mat-ripple-element {
    opacity: 0.1;
    background-color: currentColor; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-focus-overlay {
  background: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button:not([disabled]), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button:not([disabled]) {
  border-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab {
  color: white;
  background-color: #424242; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary {
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent {
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn {
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab[disabled][disabled] {
    color: rgba(255, 255, 255, 0.3); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary {
    background-color: %primary-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent {
    background-color: %accent-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn {
    background-color: %warn-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab[disabled][disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab[disabled][disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab[disabled][disabled] {
    background-color: rgba(255, 255, 255, 0.12); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-primary .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-primary .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-primary .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-primary .mat-ripple-element {
    background-color: rgba(255, 255, 255, 0.1); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-accent .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-accent .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-accent .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-accent .mat-ripple-element {
    background-color: rgba(255, 255, 255, 0.1); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button.mat-warn .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button.mat-warn .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab.mat-warn .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab.mat-warn .mat-ripple-element {
    background-color: rgba(255, 255, 255, 0.1); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button:not([class*='mat-elevation-z']), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stroked-button:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-flat-button:not([class*='mat-elevation-z']) {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button:not([class*='mat-elevation-z']) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button:not([disabled]):active:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button:not([disabled]):active:not([class*='mat-elevation-z']) {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button[disabled]:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-raised-button[disabled]:not([class*='mat-elevation-z']) {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab:not([class*='mat-elevation-z']), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab:not([class*='mat-elevation-z']) {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab:not([disabled]):active:not([class*='mat-elevation-z']), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab:not([disabled]):active:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab:not([disabled]):active:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab:not([disabled]):active:not([class*='mat-elevation-z']) {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab[disabled]:not([class*='mat-elevation-z']), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab[disabled]:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-fab[disabled]:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-mini-fab[disabled]:not([class*='mat-elevation-z']) {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-standalone,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-standalone,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard {
  box-shadow: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle {
  color: rgba(255, 255, 255, 0.5); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle .mat-button-toggle-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle .mat-button-toggle-focus-overlay {
    background-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-appearance-standard, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-appearance-standard {
  color: white;
  background: #424242; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {
  border-left: solid 1px rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) [dir='rtl'] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) [dir='rtl'] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {
  border-left: none;
  border-right: solid 1px rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle {
  border-left: none;
  border-right: none;
  border-top: solid 1px rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-checked, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-checked {
  background-color: #212121;
  color: rgba(255, 255, 255, 0.7); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-checked.mat-button-toggle-appearance-standard, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-checked.mat-button-toggle-appearance-standard {
    color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-disabled {
  color: rgba(255, 255, 255, 0.3);
  background-color: black; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-disabled.mat-button-toggle-appearance-standard, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-disabled.mat-button-toggle-appearance-standard {
    background: #424242; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-disabled.mat-button-toggle-checked, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-disabled.mat-button-toggle-checked {
    background-color: #424242; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-button-toggle-group-appearance-standard {
  border: solid 1px rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card {
  background: #424242;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card:not([class*='mat-elevation-z']) {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card.mat-card-flat:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card.mat-card-flat:not([class*='mat-elevation-z']) {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card-subtitle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-card-subtitle {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-frame, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-frame {
  border-color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checkmark, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checkmark {
  fill: #303030; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checkmark-path, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checkmark-path {
  stroke: #303030 !important; }
  @media screen and (-ms-high-contrast: black-on-white) {
    li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checkmark-path, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checkmark-path {
      stroke: #000 !important; } }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-mixedmark, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-mixedmark {
  background-color: #303030; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checked.mat-primary .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checked.mat-primary .mat-checkbox-background {
  background-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checked.mat-accent .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checked.mat-accent .mat-checkbox-background {
  background-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checked.mat-warn .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-checked.mat-warn .mat-checkbox-background {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled.mat-checkbox-checked:not(.mat-checkbox-indeterminate) .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled.mat-checkbox-checked:not(.mat-checkbox-indeterminate) .mat-checkbox-background {
  background-color: #686868; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {
  border-color: #686868; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled .mat-checkbox-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled .mat-checkbox-label {
  color: #686868; }

@media screen and (-ms-high-contrast: active) {
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-disabled {
    opacity: 0.5; } }

@media screen and (-ms-high-contrast: active) {
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox-background {
    background: none; } }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {
  background-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {
  background-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip {
  background-color: #616161;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip .mat-chip-remove, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip .mat-chip-remove {
    color: white;
    opacity: 0.4; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip .mat-chip-remove:hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip .mat-chip-remove:hover {
    opacity: 0.54; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip:focus, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip:focus {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {
  background-color: %primary-color-500%;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {
    color: white;
    opacity: 0.4; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {
    opacity: 0.54; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {
    background: rgba(255, 255, 255, 0.1); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {
  background-color: %warn-color-500%;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {
    color: white;
    opacity: 0.4; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {
    opacity: 0.54; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {
    background: rgba(255, 255, 255, 0.1); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {
  background-color: %accent-color-500%;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {
    color: white;
    opacity: 0.4; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {
    opacity: 0.54; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {
    background: rgba(255, 255, 255, 0.1); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table {
  background: #424242; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table thead, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table tbody, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table tfoot,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-header-row, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-row, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-footer-row,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) [mat-header-row], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) [mat-row], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) [mat-footer-row],
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table-sticky, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table thead, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table tbody, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table tfoot,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-header-row, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-row, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-footer-row,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) [mat-header-row], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) [mat-row], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) [mat-footer-row],
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-table-sticky {
  background: inherit; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-row, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-header-row, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-footer-row,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) th.mat-header-cell, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) td.mat-cell, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) td.mat-footer-cell, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-row, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-header-row, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) mat-footer-row,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) th.mat-header-cell, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) td.mat-cell, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) td.mat-footer-cell {
  border-bottom-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-header-cell, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-header-cell {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-cell, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-footer-cell, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-cell, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-footer-cell {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-arrow {
  border-top-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content .mat-calendar-next-button,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content .mat-calendar-previous-button, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content .mat-calendar-next-button,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content .mat-calendar-previous-button {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-table-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-table-header {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-table-header-divider::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-table-header-divider::after {
  background: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-label {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-cell-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-cell-content {
  color: white;
  border-color: transparent; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {
  background-color: rgba(255, 255, 255, 0.04); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-today:not(.mat-calendar-body-selected), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-today:not(.mat-calendar-body-selected) {
  border-color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {
  border-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-selected {
  background-color: %primary-color-500%;
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-disabled > .mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: rgba(63, 81, 181, 0.4); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-today.mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-calendar-body-today.mat-calendar-body-selected {
  box-shadow: inset 0 0 0 1px white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: #424242;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-accent .mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-accent .mat-calendar-body-selected {
    background-color: %accent-color-500%;
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {
    background-color: rgba(233, 30, 99, 0.4); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {
    box-shadow: inset 0 0 0 1px white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-warn .mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-warn .mat-calendar-body-selected {
    background-color: %warn-color-500%;
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {
    background-color: rgba(244, 67, 54, 0.4); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {
    box-shadow: inset 0 0 0 1px white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content-touch, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-content-touch {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle-active, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle-active {
  color: %primary-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle-active.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle-active.mat-accent {
    color: %accent-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle-active.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-datepicker-toggle-active.mat-warn {
    color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-dialog-container, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-dialog-container {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  background: #424242;
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-divider, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-divider {
  border-top-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-divider-vertical, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-divider-vertical {
  border-right-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel {
  background: #424242;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not([class*='mat-elevation-z']) {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-action-row, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-action-row {
  border-top-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {
  background: rgba(255, 255, 255, 0.04); }

@media (hover: none) {
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])
.mat-expansion-panel-header:hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])
.mat-expansion-panel-header:hover {
    background: #424242; } }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header-title, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header-title {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header-description,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-indicator::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header-description,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-indicator::after {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header[aria-disabled='true'], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header[aria-disabled='true'] {
  color: rgba(255, 255, 255, 0.3); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {
    color: inherit; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-label {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-hint, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-hint {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-label {
  color: %primary-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-label.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-label.mat-accent {
    color: %accent-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-label.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-label.mat-warn {
    color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-focused .mat-form-field-required-marker, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-focused .mat-form-field-required-marker {
  color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-ripple, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-ripple {
  background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-ripple, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-ripple {
  background-color: %primary-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {
    background-color: %accent-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {
    background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-label {
  color: %warn-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {
    color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-ripple,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-ripple,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-error, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-error {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy .mat-form-field-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy .mat-form-field-label {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy .mat-hint, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy .mat-hint {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy .mat-form-field-underline, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy .mat-form-field-underline {
  background-color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);
  background-size: 4px 100%;
  background-repeat: repeat-x; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-standard .mat-form-field-underline, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-standard .mat-form-field-underline {
  background-color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);
  background-size: 4px 100%;
  background-repeat: repeat-x; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill .mat-form-field-flex, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill .mat-form-field-flex {
  background-color: rgba(255, 255, 255, 0.1); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {
  background-color: rgba(255, 255, 255, 0.05); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill .mat-form-field-underline::before, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill .mat-form-field-underline::before {
  background-color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {
  background-color: transparent; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline .mat-form-field-outline, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline .mat-form-field-outline {
  color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline .mat-form-field-outline-thick, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline .mat-form-field-outline-thick {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
  color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {
  color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {
  color: rgba(255, 255, 255, 0.15); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon.mat-primary {
  color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon.mat-accent {
  color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon.mat-warn {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-type-mat-native-select .mat-form-field-infix::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-type-mat-native-select .mat-form-field-infix::after {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element:disabled,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element:disabled,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element {
  caret-color: %primary-color-500%; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element::placeholder, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element::placeholder {
    color: rgba(255, 255, 255, 0.5); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element::-moz-placeholder, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element::-moz-placeholder {
    color: rgba(255, 255, 255, 0.5); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element::-webkit-input-placeholder, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element:-ms-input-placeholder, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.5); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element option, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element option {
    color: rgba(0, 0, 0, 0.87); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element option:disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-input-element option:disabled {
    color: rgba(0, 0, 0, 0.38); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-input-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-input-element {
  caret-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-input-element,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-invalid .mat-input-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-input-element,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-invalid .mat-input-element {
  caret-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list .mat-list-item, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-item, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-selection-list .mat-list-item, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list .mat-list-item, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-item, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-selection-list .mat-list-item {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list .mat-list-option, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-option, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-selection-list .mat-list-option, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list .mat-list-option, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-option, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-selection-list .mat-list-option {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list .mat-subheader, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-subheader, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-selection-list .mat-subheader, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list .mat-subheader, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-subheader, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-selection-list .mat-subheader {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list-item-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list-item-disabled {
  background-color: black; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list-option:hover, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list-option:focus,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-item:hover,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-item:focus, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list-option:hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-list-option:focus,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-item:hover,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nav-list .mat-list-item:focus {
  background: rgba(255, 255, 255, 0.04); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-panel, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-panel {
  background: #424242; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-panel:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-panel:not([class*='mat-elevation-z']) {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item {
  background: transparent;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item[disabled], li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item[disabled]::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item[disabled], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item[disabled]::after {
    color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item .mat-icon:not([color]),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item-submenu-trigger::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item .mat-icon:not([color]),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item-submenu-trigger::after {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item:hover:not([disabled]),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item.cdk-program-focused:not([disabled]),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item.cdk-keyboard-focused:not([disabled]),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item-highlighted:not([disabled]), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item:hover:not([disabled]),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item.cdk-program-focused:not([disabled]),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item.cdk-keyboard-focused:not([disabled]),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-menu-item-highlighted:not([disabled]) {
  background: rgba(255, 255, 255, 0.04); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator {
  background: #424242; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-page-size .mat-select-trigger, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-page-size .mat-select-trigger {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-decrement,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-increment, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-decrement,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-increment {
  border-top: 2px solid white;
  border-right: 2px solid white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-first,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-last, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-first,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-paginator-last {
  border-top: 2px solid white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-decrement,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-increment,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-first,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-last, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-decrement,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-increment,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-first,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-icon-button[disabled] .mat-paginator-last {
  border-color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar-background {
  fill: %primary-color-100%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar-buffer, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar-buffer {
  background-color: %primary-color-100%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar-fill::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar-fill::after {
  background-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-accent .mat-progress-bar-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-accent .mat-progress-bar-background {
  fill: %accent-color-100%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-accent .mat-progress-bar-buffer, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-accent .mat-progress-bar-buffer {
  background-color: %accent-color-100%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-accent .mat-progress-bar-fill::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {
  background-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-warn .mat-progress-bar-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-warn .mat-progress-bar-background {
  fill: %warn-color-100%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-warn .mat-progress-bar-buffer, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-warn .mat-progress-bar-buffer {
  background-color: %warn-color-100%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-warn .mat-progress-bar-fill::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-spinner circle, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-spinner circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-spinner circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-spinner circle {
  stroke: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-spinner.mat-accent circle, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-spinner.mat-accent circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-spinner.mat-accent circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-spinner.mat-accent circle {
  stroke: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-spinner.mat-warn circle, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-spinner.mat-warn circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-progress-spinner.mat-warn circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-spinner.mat-warn circle {
  stroke: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-outer-circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-outer-circle {
  border-color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {
  border-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary .mat-radio-inner-circle,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary .mat-radio-inner-circle,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {
  background-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {
  border-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent .mat-radio-inner-circle,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent .mat-radio-inner-circle,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {
  background-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {
  border-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn .mat-radio-inner-circle,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn .mat-radio-inner-circle,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-outer-circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {
  border-color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-inner-circle, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {
  background-color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-label-content, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button.mat-radio-disabled .mat-radio-label-content {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-radio-button .mat-ripple-element {
  background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-value, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-value {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-placeholder, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-placeholder {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-disabled .mat-select-value, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-disabled .mat-select-value {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-arrow {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-panel, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-panel {
  background: #424242; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-panel:not([class*='mat-elevation-z']), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-panel:not([class*='mat-elevation-z']) {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {
    background: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused.mat-primary .mat-select-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused.mat-primary .mat-select-arrow {
  color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused.mat-accent .mat-select-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused.mat-accent .mat-select-arrow {
  color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused.mat-warn .mat-select-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field.mat-focused.mat-warn .mat-select-arrow {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {
  color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-container, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-container {
  background-color: #303030;
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer {
  background-color: #424242;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer.mat-drawer-push, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer.mat-drawer-push {
    background-color: #424242; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer:not(.mat-drawer-side), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer:not(.mat-drawer-side) {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-side, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-side {
  border-right: solid 1px rgba(255, 255, 255, 0.12); }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-side.mat-drawer-end, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-side.mat-drawer-end {
    border-left: solid 1px rgba(255, 255, 255, 0.12);
    border-right: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) [dir='rtl'] .mat-drawer-side, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) [dir='rtl'] .mat-drawer-side {
  border-left: solid 1px rgba(255, 255, 255, 0.12);
  border-right: none; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) [dir='rtl'] .mat-drawer-side.mat-drawer-end, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) [dir='rtl'] .mat-drawer-side.mat-drawer-end {
    border-left: none;
    border-right: solid 1px rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-backdrop.mat-drawer-shown, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-drawer-backdrop.mat-drawer-shown {
  background-color: rgba(189, 189, 189, 0.6); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {
  background-color: %accent-color-200%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {
  background-color: rgba(244, 143, 177, 0.54); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-ripple-element {
  background-color: %accent-color-200%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {
  background-color: %primary-color-200%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {
  background-color: rgba(159, 168, 218, 0.54); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-ripple-element {
  background-color: %primary-color-200%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {
  background-color: %warn-color-200%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {
  background-color: rgba(239, 154, 154, 0.54); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-ripple-element {
  background-color: %warn-color-200%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle:not(.mat-checked) .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {
  background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-disabled .mat-slide-toggle-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-disabled .mat-slide-toggle-thumb {
  background-color: #424242; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-disabled .mat-slide-toggle-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-disabled .mat-slide-toggle-bar {
  background-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle-thumb {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: #bdbdbd; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slide-toggle-bar {
  background-color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-track-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-track-background {
  background-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-track-fill,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-thumb,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-thumb-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-track-fill,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-thumb,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-thumb-label {
  background-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-thumb-label-text, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-primary .mat-slider-thumb-label-text {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-track-fill,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-thumb,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-thumb-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-track-fill,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-thumb,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-thumb-label {
  background-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-thumb-label-text, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-accent .mat-slider-thumb-label-text {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-track-fill,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-thumb,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-thumb-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-track-fill,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-thumb,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-thumb-label {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-thumb-label-text, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-warn .mat-slider-thumb-label-text {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-focus-ring, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-focus-ring {
  background-color: rgba(233, 30, 99, 0.2); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider:hover .mat-slider-track-background,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .cdk-focused .mat-slider-track-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider:hover .mat-slider-track-background,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .cdk-focused .mat-slider-track-background {
  background-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled .mat-slider-track-background,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled .mat-slider-track-fill,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled .mat-slider-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled .mat-slider-track-background,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled .mat-slider-track-fill,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled .mat-slider-thumb {
  background-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled:hover .mat-slider-track-background, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-disabled:hover .mat-slider-track-background {
  background-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value .mat-slider-focus-ring, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value .mat-slider-focus-ring {
  background-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {
  background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {
  background-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {
  border-color: rgba(255, 255, 255, 0.3);
  background-color: transparent; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {
  border-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {
  border-color: rgba(255, 255, 255, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-has-ticks .mat-slider-wrapper::after, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-has-ticks .mat-slider-wrapper::after {
  border-color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-horizontal .mat-slider-ticks, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-horizontal .mat-slider-ticks {
  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);
  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-vertical .mat-slider-ticks, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-slider-vertical .mat-slider-ticks {
  background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header.cdk-keyboard-focused, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header.cdk-program-focused, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header:hover, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header.cdk-keyboard-focused, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header.cdk-program-focused, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header:hover {
  background-color: rgba(255, 255, 255, 0.04); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-label,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-optional, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-label,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-optional {
  color: rgba(255, 255, 255, 0.7); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon {
  background-color: rgba(255, 255, 255, 0.7);
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-selected,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-state-done,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-state-edit, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-selected,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-state-done,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-state-edit {
  background-color: %primary-color-500%;
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-state-error, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-icon-state-error {
  background-color: transparent;
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-label.mat-step-label-active, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-label.mat-step-label-active {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-label.mat-step-label-error, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-step-header .mat-step-label.mat-step-label-error {
  color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-horizontal, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-vertical, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-horizontal, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-vertical {
  background-color: #424242; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-vertical-line::before, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-vertical-line::before {
  border-left-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-horizontal-stepper-header::before,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-horizontal-stepper-header::after,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-horizontal-line, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-horizontal-stepper-header::before,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-horizontal-stepper-header::after,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-stepper-horizontal-line {
  border-top-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-sort-header-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-sort-header-arrow {
  color: #c6c6c6; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group-inverted-header .mat-tab-nav-bar,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group-inverted-header .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group-inverted-header .mat-tab-nav-bar,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group-inverted-header .mat-tab-header {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-label, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-link, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-link {
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-label.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-link.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-label.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-link.mat-tab-disabled {
    color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-header-pagination-chevron {
  border-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(255, 255, 255, 0.5); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group[class*='mat-background-'] .mat-tab-header,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar[class*='mat-background-'], * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group[class*='mat-background-'] .mat-tab-header,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar[class*='mat-background-'] {
  border-bottom: none;
  border-top: none; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(197, 202, 233, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-ink-bar, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary .mat-ink-bar {
  background-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {
  background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(248, 187, 208, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-ink-bar, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent .mat-ink-bar {
  background-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {
  background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(255, 205, 210, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-ink-bar, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn .mat-ink-bar {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {
  background-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(197, 202, 233, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-header, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-links, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-header, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-links, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-links, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-links {
  background-color: %primary-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link {
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {
    color: rgba(255, 255, 255, 0.4); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {
  border-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(255, 255, 255, 0.4); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-primary .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {
  background-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(248, 187, 208, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-header, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-links, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-header, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-links, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-links, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-links {
  background-color: %accent-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link {
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {
    color: rgba(255, 255, 255, 0.4); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {
  border-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(255, 255, 255, 0.4); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-accent .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {
  background-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {
  background-color: rgba(255, 205, 210, 0.3); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-header, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-links, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-header, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-links, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-links, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-header, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-links {
  background-color: %warn-color-500%; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link {
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {
    color: rgba(255, 255, 255, 0.4); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {
  border-color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
  border-color: rgba(255, 255, 255, 0.4); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-ripple-element, li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-group.mat-background-warn .mat-ripple-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {
  background-color: rgba(255, 255, 255, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar {
  background: #212121;
  color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar.mat-primary, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar.mat-primary {
    background: %primary-color-500%;
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar.mat-accent, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar.mat-accent {
    background: %accent-color-500%;
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar.mat-warn, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar.mat-warn {
    background: %warn-color-500%;
    color: white; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field-underline,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field-ripple,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-focused .mat-form-field-ripple, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field-underline,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field-ripple,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-focused .mat-form-field-ripple {
    background-color: currentColor; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field-label,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-focused .mat-form-field-label,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-select-value,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-select-arrow,
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field-label,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-focused .mat-form-field-label,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-select-value,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-select-arrow,
  * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
    color: inherit; }
  li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-input-element, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-toolbar .mat-input-element {
    caret-color: currentColor; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tooltip, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tooltip {
  background: rgba(97, 97, 97, 0.9); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tree, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tree {
  background: #424242; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tree-node,
li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nested-tree-node, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-tree-node,
* li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-nested-tree-node {
  color: white; }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-snack-bar-container, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-snack-bar-container {
  color: rgba(0, 0, 0, 0.87);
  background: #fafafa;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

li-theme-container li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-simple-snackbar-action, * li-theme-container[theme=%theme-name%]:not([disabled="true"]) .mat-simple-snackbar-action {
  color: inherit; }
`;
