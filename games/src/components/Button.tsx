interface Props {
  children: string;
  type?: string;
  onCLick: () => void
}

const Button = ({ children, type = 'primary' , onCLick }: Props) => {
  return (
    <div>
      <button type="button" className={`btn btn-${type}`} onClick={ onCLick }>
        {children}
      </button>
    </div>
  );
};

export default Button;
