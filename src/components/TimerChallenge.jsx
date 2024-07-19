import { styled } from 'styled-components';

const ChallengeSection = styled.section`
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin: 2rem auto;
    background: linear-gradient(#4df8df, #4df0f8);
    color: #221c18;
    box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
    border-radius: 6px;

    & button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        background: #12352f;
        color: #edfcfa;
        font-size: 1.2rem;
        cursor: pointer;
    }

    & button:hover {
        background: #051715;
    }

    & h2 {
        font-size: 1.5rem;
        letter-spacing: 0.1em;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        color: #221c18;
    }

    & .active {
        animation: flash 1s infinite;
    }

    & .challenge-time {
        border: 1px solid #46cebe;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        margin: 0.5rem;
    }
`;

export default function TimerChallenge({title, targetTime}) {
    return (
        <ChallengeSection>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <div>
                <button>
                    Start Challenge
                </button>
            </div>
            <p>
                Time is running... / Timer inactive
            </p>
        </ChallengeSection>
    );
}