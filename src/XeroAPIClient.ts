import { OAuthClient, IOAuthClient } from './OAuthClient';
import { Invoice, ContactGroup, ContactGroupsResponse, InvoicesResponse } from './interfaces/AccountingResponse';

export interface IXeroClientConfiguration {
	appType: 'public' | 'private' | 'partner';
	consumerKey: string;
	consumerSecret: string;
	privateKey?: string;
	callbackUrl?: string;
	userAgent?: string;
}

const API_BASE = 'https://api.xero.com';
const API_BASE_PATH = '/api.xro/2.0/';
const OAUTH_REQUEST_TOKEN_PATH = '/oauth/RequestToken';
const OAUTH_ACCESS_TOKEN_PATH = '/oauth/Authorize';

export class XeroAPIClient {
	private oauthToken: string;
	private oauthSecret: string;

	constructor(private options: IXeroClientConfiguration, private _oauthClient?: IOAuthClient, private _oauth?: any) {
		if (!this.options) {
			throw new Error('XeroAPIClient: options must be passed when creating a new instance');
		}
		// TODO: Check options for each app type

		let consumerSecret = this.options.consumerSecret;
		if (this.options.appType == 'private') {
			this.oauthToken = this.options.consumerKey;
			this.oauthSecret = this.options.privateKey;
			consumerSecret = this.options.privateKey;
		}

		if (!this._oauthClient) {
			this._oauthClient = new OAuthClient({
				consumerKey: this.options.consumerKey,
				consumerSecret: consumerSecret,
				oauthToken: this.oauthToken,
				oauthSecret: this.oauthSecret,
				apiBaseUrl: API_BASE,
				apiBasePath: API_BASE_PATH,
				oauthRequestTokenPath: OAUTH_REQUEST_TOKEN_PATH,
				oauthAccessTokenPath: OAUTH_ACCESS_TOKEN_PATH

			}, this._oauth);
		}
	}

	private get<T>(endpoint: string, args?: any): Promise<T> {
		return this._oauthClient.get<T>(endpoint, args);
	}

	public invoices = {
		get: async (args?: any): Promise<InvoicesResponse> => {
			// TODO: Support invoice number
			// TODO: Support for where arg
			// TODO: Summerize errors?
			let endpoint = 'invoices';
			if (args && args.InvoiceId) {
				endpoint = endpoint + '/' + args.InvoiceId;
			}

			// TODO: I think we want to not return the oauth.get HTTP object incase we change oauth lib
			return this.get<InvoicesResponse>(endpoint, args);
		},
		getPDF: async (args?: any): Promise<string> => {
			// is a string when args.accept = application/pdf
			args.Accept = 'application/pdf';

			// TODO: Support invoice number
			// TODO: Support for where arg
			// TODO: Summerize errors?
			// TODO: Refactor duplication
			let endpoint = 'invoices';
			if (args && args.InvoiceId) {
				endpoint = endpoint + '/' + args.InvoiceId;
			}

			// TODO: I think we want to not return the oauth.get HTTP object incase we change oauth lib
			return this.get<string>(endpoint, args);
		}, // TODO: Something about { Invoices: Invoice[] } ??? Maybes
		create: async (invoice: Invoice | { Invoices: Invoice[] }, args?: any): Promise<InvoicesResponse> => {
			// To add contacts to a contact group use the following url /ContactGroups/ContactGroupID/Contacts
			// TODO: Support for where arg
			// TODO: Summerize errors?
			const endpoint = 'invoices?summarizeErrors=false';

			return this._oauthClient.put<InvoicesResponse>(endpoint, invoice, args);
		},
	};

	public contactgroups = {
		get: async (args?: any): Promise<ContactGroupsResponse> => {

			// TODO: Support for where arg
			// TODO: Summerize errors?
			let endpoint = 'contactgroups';
			if (args && args.ContactGroupID) {
				endpoint = endpoint + '/' + args.ContactGroupID;
			}

			return this.get<ContactGroupsResponse>(endpoint, args);
		},
		create: async (contactGroup: ContactGroup, args?: any): Promise<ContactGroupsResponse> => {
			// To add contacts to a contact group use the following url /ContactGroups/ContactGroupID/Contacts
			// TODO: Support for where arg
			// TODO: Summerize errors?
			let endpoint = 'contactgroups';
			if (args && args.ContactGroupID) {
				endpoint = endpoint + '/' + args.ContactGroupId;
			}

			return this._oauthClient.put<ContactGroupsResponse>(endpoint, contactGroup, args);
		},
		// TODO: This is actually delete the CONTACT on contactgroup
		deleteContacts: async (args?: any): Promise<ContactGroupsResponse> => {
			// To add contacts to a contact group use the following url /ContactGroups/ContactGroupID/Contacts
			// TODO: Support for where arg
			// TODO: Summerize errors?
			let endpoint = 'contactgroups';
			if (args && args.ContactGroupID) {
				endpoint = endpoint + '/' + args.ContactGroupID + '/contacts';
			}
			if (args && args.ContactGroupID && args.ContactID) {
				endpoint = endpoint + '/' + args.ContactID;
			}

			return this._oauthClient.delete<ContactGroupsResponse>(endpoint, args);
		}
	};

	// private checkAuthentication() {
	// 	// TODO
	// }
}
