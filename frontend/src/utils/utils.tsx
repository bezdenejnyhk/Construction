export const renderWithLineBreaks = (text: any) => {
  return text.split("<br/>").map((line: any, index: any, array: any) => (
    <span key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </span>
  ));
};
