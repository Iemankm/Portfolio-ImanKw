import s from './button.module.css';
const VARIANT = {
  resumebtn: 'resumebtn'
};

const Base = ({
  as: Component = 'p',
  children,
  className,
  variant,
  ...props
}) =>{
  const classNames = [[s[variant]], className].filter(Boolean).join(" ");
 return (
  <Component {...props} className={classNames}>
    {children}
  </Component>
  );
 };


export const Resumebtn = (props) => (
  <Base as="button" variant="resumebtn" {...props} />
);



