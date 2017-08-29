import { TodosRoutingPage } from './app.po';

describe('todos-routing App', () => {
  let page: TodosRoutingPage;

  beforeEach(() => {
    page = new TodosRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
