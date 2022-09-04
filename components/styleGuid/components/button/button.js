import s from './button.module.css';
const VARIANT = {
  resumebtn: 'resumebtn',
  sendbtn: 'sendbtn'
};

const Base = ({
  as: Component = 'p',
  children,
  className,
  variant,
  ...props
}) => (
  <Component {...props} className={s[VARIANT[`${variant}`]]}>
    {children}
  </Component>

);

export const Resumebtn = (props) => (
  <Base as="button" variant="resumebtn" {...props} />
);



export const Sendbtn = (props) => (
  <Base as="button" variant="sendbtn" {...props} />
);