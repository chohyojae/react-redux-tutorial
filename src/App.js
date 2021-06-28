import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <>
      <CounterContainer />
      <hr />
      <Todos />
    </>
  );
};

export default App;
