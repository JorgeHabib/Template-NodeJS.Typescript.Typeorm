import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO';

interface IMailTemplateProvider {
  parse(data: IParseTemplateDTO): Promise<string>;
}

export default IMailTemplateProvider;
