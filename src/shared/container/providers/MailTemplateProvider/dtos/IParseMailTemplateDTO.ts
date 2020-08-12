interface ITemplateVariables {
  [keys: string]: string | number;
}

interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}

export default IParseMailTemplateDTO;
