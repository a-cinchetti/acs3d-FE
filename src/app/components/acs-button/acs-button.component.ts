import { Component, Input } from '@angular/core';

/**
 * Titano Button Component class
 *
 * @export
 * @class AcsButtonComponent
 */
@Component({
  selector: 'app-acs-button',
  templateUrl: './acs-button.component.html',
  styleUrls: [],
})
export class AcsButtonComponent {
  /**
   * The button label
   *
   * @memberof AcsButtonComponent
   */
  @Input() label = '';

  /**
   * The button type
   *
   * @type {('primary' | 'secondary' | 'tertiary' | 'link' | 'outline' | 'link-grey')}
   * @memberof AcsButtonComponent
   */
  @Input() type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link'
    | 'outline'
    | 'link-grey' = 'primary';

  /**
   * The button size
   *
   * @type {('md' | 'sm' | 'lg')}
   * @memberof AcsButtonComponent
   */
  @Input() size?: 'md' | 'sm' | 'lg' = 'md';

  /**
   * The button class
   *
   * @type {string}
   * @memberof AcsButtonComponent
   */
  @Input() buttonClass?: string;

  /**
   * The button left icon ( if present )
   *
   * @type {string}
   * @memberof AcsButtonComponent
   */
  @Input() iconLeft?: string = undefined;

  /**
   * The button right icon ( if present )
   *
   * @type {string}
   * @memberof AcsButtonComponent
   */
  @Input() iconRight?: string = undefined;

  /**
   * The button icon font set
   * @type {('fa' | 'fa-solid' | 'fa-regular' | 'fa-light' | 'fa-duotone' | 'fa-thin')}
   * @memberof AcsButtonComponent
   */
  @Input() iconFontSet?:
    | 'fa'
    | 'fa-solid'
    | 'fa-regular'
    | 'fa-light'
    | 'fa-duotone'
    | 'fa-thin' = 'fa';

  /**
   * The button round check flag
   *
   * @memberof AcsButtonComponent
   */
  @Input() isRound = false;

  /**
   * The button square check flag
   *
   * @memberof AcsButtonComponent
   */
  @Input() isSquare = false;

  /**
   * The button disabled check flag
   *
   * @type {(true | false | undefined)}
   * @memberof AcsButtonComponent
   */
  @Input() isDisabled: true | false | undefined = false;

  /**
   * The button submit check flag
   *
   * @memberof AcsButtonComponent
   */
  @Input() isSubmit = true;

  /**
   * The button custom icon ( if present )
   *
   * @memberof AcsButtonComponent
   */
  @Input() customIcon? = false;

  /**
   * The button selected check flag
   *
   * @memberOf AcsButtonComponent
   */
  @Input() selected? = false;

  /**
   * The button onclick action
   *
   * @memberof AcsButtonComponent
   */
  @Input() onClick: (...args: any[]) => void = () => {
    return;
  };

  /**
   * The button check flag to see if is submit
   * @return {*}  {string}
   * @memberof AcsButtonComponent
   */
  getIsSubmit(): string {
    return this.isSubmit ? 'submit' : 'button';
  }

  /**
   * Gets the button type
   *
   * @return {*}  {string}
   * @memberof AcsButtonComponent
   */
  getButtonType(): string {
    return `button--${this.type}`;
  }

  /**
   * Gets the button size
   *
   * @return {*}  {string}
   * @memberof AcsButtonComponent
   */
  getButtonSize(): string {
    return `button--${this.size}`;
  }

  getButtonClass(): string {
    return this.buttonClass ? this.buttonClass : '';
  }

  /**
   * Checks if is rounded button
   *
   * @return {*}  {string}
   * @memberof AcsButtonComponent
   */
  isButtonRound(): string {
    return this.isRound ? 'button--round' : '';
  }

  /**
   * Checks if is squared button
   *
   * @return {*}  {string}
   * @memberof AcsButtonComponent
   */
  isButtonSquare(): string {
    return this.isSquare ? 'button--square' : '';
  }

  /**
   * Checks if is selected
   */
  isSelected(): string {
    return this.selected ? 'button--selected' : '';
  }

  getIconType() {
    return this.label ? '' : 'button--icon';
  }
}
