export interface JobDTO {
  id: number;
  title: string;
  description: string;
  company: {
    display_name: string;
  };
  location: {
    display_name: string;
  };
  redirect_url: string;
  category: {
    label: string;
  };
  contract_time: string;
  contract_type: string;
  created: string;
}
