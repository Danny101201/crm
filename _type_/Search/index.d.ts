type Params = {
  name: string;
  personId: string;
};

type UserType = {
  name: string;
  id: number;
  email: string;
  title: string;
  organization: string;
};

interface ListType {
  id: number;
  name: string;
  personId: number;
  organization: string;
}
