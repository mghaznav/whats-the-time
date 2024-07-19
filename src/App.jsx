import { styled } from 'styled-components';

import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

const Challenges = styled.div`
    max-width: 50rem;
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

function App() {
  return (
    <>
      <Player />
      <Challenges>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </Challenges>
    </>
  );
}

export default App;
