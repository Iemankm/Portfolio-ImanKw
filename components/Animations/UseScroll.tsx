import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

export default function UseScroll(threshold = 0.1) {
  const controls = useAnimation();
  const [element, view] = useInView({threshold: threshold});

  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [element, controls];
}