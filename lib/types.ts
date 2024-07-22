export type Menu = {
  title: string;
  path: string;
};
export type HeaderMenu = {
  header: string;
  menu: Menu[];
};

type PropertyType =
  | 'apartment'
  | 'condo_townhome'
  | 'condo_townhome_rowhome_coop'
  | 'condop'
  | 'condos'
  | 'coop'
  | 'duplex_triplex'
  | 'farm'
  | 'land'
  | 'mobile'
  | 'multi_family'
  | 'single_family'
  | 'townhomes';

export type FilterValues = {
  location?: string;
  status?: string;
  type?: PropertyType;
};

type Coordinate = {
  lat: number;
  lon: number;
  accuracy: number | null;
};

export type Address = {
  city: string;
  line: string;
  street_name: string;
  street_number: string;
  street_suffix: string;
  country: string;
  postal_code: string;
  state_code: string;
  state: string;
  coordinate: Coordinate;
};

type Branding = {
  photo: string | null;
  name: string;
  phone: string | null;
  link: string | null;
};

export type ConsumerAdvertiser = {
  advertiser_id: string;
  office_id: string | null;
  agent_id: string | null;
  name: string;
  phone: string | null;
  type: string;
  href: string | null;
  slogan: string | null;
  photo: {
    href: string | null;
  };
  show_realtor_logo: boolean;
  hours: string | null;
};

type HomeOpenHouse = {
  start_date: string;
  end_date: string;
  description: string;
  time_zone: string;
};

export type SearchHomeDescription = {
  sub_type: string | null;
  type: string;
  beds: number;
  baths: number;
  lot_sqft: number;
  sqft: number | null;
  beds_max: number | null;
  beds_min: number | null;
  sqft_max: number | null;
  sqft_min: number | null;
  baths_full: number;
  baths_half: number;
  baths_min: number | null;
  baths_max: number | null;
  baths_full_calc: number;
  baths_partial_calc: number;
  text: string | null;
  baths_consolidated: string | null;
  garage: number | null;
  garage_min: number | null;
  garage_max: number | null;
  units: number | null;
  name: string | null;
};

type HomeAdvertiser = {
  fulfillment_id: string;
  name: string;
  email: string;
  href: string | null;
  slogan: string | null;
  type: string;
};

type HomeFlags = {
  is_price_reduced: boolean | null;
  is_new_construction: boolean | null;
  is_foreclosure: boolean | null;
  is_plan: boolean | null;
  is_new_listing: boolean;
  is_coming_soon: boolean | null;
  is_contingent: boolean | null;
  is_pending: boolean | null;
};

type MlsAgent = {
  id: string;
  agent_id: string;
  agent_name: string;
  office_id: string;
  office_name: string | null;
};

type MlsSource = {
  agents: MlsAgent[] | null;
  id: string;
  type: string;
  spec_id: string | null;
  plan_id: string | null;
  listing_href: string | null;
  listing_id: string;
};

type HomePhoto = {
  href: string;
  type: string | null;
};

type LatestEstimate = {
  estimate: number;
};

type OpCityLeadAttributes = {
  flip_the_market_enabled: boolean;
};

type LeadAttributes = {
  lead_type: string;
  show_contact_an_agent: boolean;
  opcity_lead_attributes: OpCityLeadAttributes;
};

type ProductSummary = {
  brand_name: string;
  products: string[];
};

type SearchHomeLocation = {
  address: Address;
  street_view_url: string;
  county: {
    fips_code: string;
  };
};

type HomeDetails = {
  category: string;
  text: string[];
};

export type Property = {
  property_id: string;
  listing_id: string;
  plan_id: string | null;
  status: string;
  photo_count: number;
  details: HomeDetails[] | null;
  branding: Branding[];
  consumer_advertisers: ConsumerAdvertiser[];
  location: SearchHomeLocation;
  open_houses: HomeOpenHouse[];
  description: SearchHomeDescription;
  virtual_tours: string | null;
  matterport: boolean;
  advertisers: HomeAdvertiser[] | null;
  flags: HomeFlags;
  source: MlsSource;
  pet_policy: string | null;
  community: string | null;
  primary_photo: HomePhoto | null;
  photos: HomePhoto[] | null;
  href: string;
  list_price: number;
  list_price_min: number | null;
  list_price_max: number | null;
  price_reduced_amount: number | null;
  estimate: LatestEstimate;
  lead_attributes: LeadAttributes;
  last_sold_date: string;
  list_date: string;
  products: ProductSummary;
  last_sold_price: number;
};

type SearchHomeResult = {
  count: number;
  total: number;
  results: Property[];
};

export type RapidApiPropertyOperation = {
  data: {
    home: Property;
  };
};

export type RapidApiPropertiesOperation = {
  data: {
    home_search: SearchHomeResult;
  };
};

export type ZodError = {
  code: string;
  minimum?: number;
  type: string;
  inclusive?: boolean;
  exact?: boolean;
  message: string;
  path: string[];
};

export type ValidationError = {
  [key: string]: {
    message: string;
  };
};
