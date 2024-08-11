export type CustomerCardProps = {
  item: Customer;
  setSelectedCustomer: (customer: Customer | null) => void;
};

export type CustomerDetailCardProp = {
  selectedCustomer: Customer | null;
};

export type CustomerDetailsProp = {
  images: ImageProp[];
  selectedCustomer: Customer | null;
};

export type CustomerListProp = {
  customers: Customer[];
  setSelectedCustomer: (customer: Customer | null) => void;
};

export type ImageProp = {
  id: string;
  download_url: string;
  author: string;
};

export type ImageGridProp = {
  images: ImageProp[];
};

export type Customer = {
  id: number;
  name: string;
  title: string;
  address: string;
};
