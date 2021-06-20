interface IButtonProps {
  label: string;
  onClick?: () => void;
}

function Button(props: IButtonProps) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button;
