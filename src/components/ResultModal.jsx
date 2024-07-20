import { styled } from 'styled-components';
import { forwardRef } from 'react';

const StyledDialog = styled.dialog`

    border: none;
    border-radius: 8px;
    padding: 2rem;
    background-color: #d7fcf8;


    &[open] {
        animation: slide-in-from-top 0.35s ease-out;
    }

    &::backdrop {
        background: rgba(0, 0, 0, 0.9);
    }

    & h2 {
        font-family: 'Handjet', monospace;
        margin: 0 0 0.25rem 0;
        font-size: 3rem;
        text-transform: uppercase;
    }

    & progress {
        width: 100%;
        height: 1.5rem;
        margin: 0;
        accent-color: #46cebe;
    }

    & p {
        margin: 0.5rem 0;
        font-size: 1.2rem;
    }

    & p strong {
        color: #10655b;
    }

    & form {
        text-align: right;
    }

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
`

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return (
        <StyledDialog ref={ref}>
            <h2>You {result}</h2>
            <p>
                The target time was
                <strong>
                    {' ' + targetTime} second{targetTime > 1 ? 's' : ''}.
                </strong>
                <p>You stopped the timer with <strong>X seconds left.</strong></p>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </StyledDialog>
    );
})

export default ResultModal;