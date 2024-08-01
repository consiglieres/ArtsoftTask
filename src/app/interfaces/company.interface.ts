export interface ICompany{
  filter(arg0: (property: any) => boolean): ICompany
  id: number
  logo: string
  business_name: string
  type: string
  industry: string
  catch_phrase: string
  phone_number: string
  full_address: string
}