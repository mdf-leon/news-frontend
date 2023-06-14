export const handleInputChange = (setState: React.Dispatch<React.SetStateAction<any>>) => {
  return (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value)
  }
};