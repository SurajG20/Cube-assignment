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
  id: number;
  url: string;
  alt: string;
  src:{
    tiny:string
  }
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
