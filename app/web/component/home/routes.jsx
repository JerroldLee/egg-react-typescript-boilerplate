import Home from './components/home';
import About from './components/about';
const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      );
    }}/>
  );
};
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: Home
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;