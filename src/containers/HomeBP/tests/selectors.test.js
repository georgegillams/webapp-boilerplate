import { selectState, selectDomain } from '../selectors';

describe('selectShowcases', () => {
  it('should select the initial state', () => {
    const initialState = {
      loadingShowcases: false,
      loadShowcasesError: null,
      showcases: [],
    };

    const mockedState = {};

    expect(selectDomain(mockedState)).toEqual(initialState);
  });

  it('should select the showcases state', () => {
    const initialShowcasesState = {
      loadingShowcases: false,
      loadShowcasesError: null,
      showcases: [
        { title: 'Auth0"', src: 'https://nextjs.org/static/images/showcases/auth0.jpg', link: 'https://auth0.com/' },
        {
          link: 'https://marketplace.uber.com/',
          title: 'Uber Marketplace',
          src: 'https://nextjs.org/static/images/showcases/underbelly.jpg',
        },
      ],
    };

    const mockedState = {
      showcases: initialShowcasesState,
    };

    const selectShowcasesMock = selectState();

    expect(selectShowcasesMock(mockedState)).toEqual(initialShowcasesState);
  });
});
