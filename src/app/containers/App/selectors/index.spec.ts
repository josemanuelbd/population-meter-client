import { rootReducer } from 'base/reducers';
import * as selectors from '.';

const initialState = rootReducer(undefined, { type: 'INIT' });

describe('App selectors', () => {
  it('should return an empty string', () => {
    const expectedLang = '';

    const lang = selectors.getAppLanguage(initialState);

    expect(lang).toBe(expectedLang);
  });
});
