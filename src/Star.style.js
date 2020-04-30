import styled from 'styled-components'

const Wrapper = styled.div`

.star-logo {
  width: 3em;
  height: 3em;
}

.star-logo path {
    fill: var(--orange)
}

.st0 {
  opacity: 0.6;
}

.st1 {
  opacity: 0.5;
}

.st2 {
  opacity: 0.4;
}

.st3 {
  opacity: 0.3;
}

.st4 {
  opacity: 0.2;
}

.animation {
  animation: starAnimation 10s linear infinite;
}

.animation .st0 {
  animation: bling-1 5s linear infinite;
}
.animation .st1 {
  animation: bling-2 5s linear infinite;
}
.animation .st2 {
  animation: bling-3 5s linear infinite;
}
.animation .st3 {
  animation: bling-4 5s linear infinite;
}
.animation .st4 {
  animation: bling-5 5s linear infinite;
}

@keyframes starAnimation {
    100%
    {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@keyframes bling-1 {
  0%
  {
      opacity: (0.7 - (1 / 10));
  }
  5%
  {
      opacity: (0.7 - (1 / 10))+0.3;
  }
  10%
  {
      opacity: (0.7 - (1 / 10));
  }
  100%
  {
      opacity: (0.7 - (1 / 10));
  }
}
@keyframes bling-2 {
  0%
  {
      opacity: (0.7 - (2 / 10));
  }
  5%
  {
      opacity: (0.7 - (2 / 10))+0.3;
  }
  10%
  {
      opacity: (0.7 - (2 / 10));
  }
  100%
  {
      opacity: (0.7 - (2 / 10));
  }
@keyframes bling-3 {
  0%
  {
      opacity: (0.7 - (3 / 10));
  }
  5%
  {
      opacity: (0.7 - (3 / 10))+0.3;
  }
  10%
  {
      opacity: (0.7 - (3 / 10));
  }
  100%
  {
      opacity: (0.7 - (3 / 10));
  }
@keyframes bling-4 {
  0%
  {
      opacity: (0.7 - (4 / 10));
  }
  5%
  {
      opacity: (0.7 - (4 / 10))+0.3;
  }
  10%
  {
      opacity: (0.7 - (4 / 10));
  }
  100%
  {
      opacity: (0.7 - (4 / 10));
  }
@keyframes bling-5 {
  0%
  {
      opacity: (0.7 - (5 / 10));
  }
  5%
  {
      opacity: (0.7 - (5 / 10))+0.3;
  }
  10%
  {
      opacity: (0.7 - (5 / 10));
  }
  100%
  {
      opacity: (0.7 - (5 / 10));
  }
}

`

export default Wrapper
