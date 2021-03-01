import * as S from "./Input.style";

export default function Input({
  onChange,
  ...props
}: React.ComponentPropsWithoutRef<"input">) {
  return <S.Input onChange={onChange} {...props} />;
}
