import { TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";

/**
 * The custom loader class
 *
 * @export
 * @class CustomLoader
 * @implements {TranslateLoader}
 */
export class CustomLoader implements TranslateLoader {
  /**
   * Creates an instance of CustomLoader.
   * @param {HttpClient} http The http client
   * @memberof CustomLoader
   */
  constructor(private http: HttpClient) {}

  /**
   * Gets the translated set of string for the given language
   *
   * @param {string} lang the language
   * @return {Observable<any>}  The strings
   * @memberof CustomLoader
   */
  getTranslation(lang: string): Observable<any> {
    return forkJoin([
      this.http.get("./assets/i18n/" + lang + ".json"),
    ]).pipe(map((data) => data.reduce((p, v) => ({ ...p, ...v }), {})));
  }
}
