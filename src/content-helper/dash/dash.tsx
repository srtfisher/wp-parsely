import { DataViews, type ViewTable } from '@wordpress/dataviews';
import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

const App = () => {
	interface SiteItem {
		blogId: number;
		domain: string;
		cpuCount: number;
		burstEnabled: boolean;
		spaceQuota: string;
		createdAt: number;
	}

	interface SitesTableField {
		item: SiteItem;
	}

	const data: SiteItem[] = [
		{
			blogId: 1,
			domain: 'test1.blog',
			cpuCount: 1,
			burstEnabled: false,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 2,
			domain: 'test2.com',
			cpuCount: 2,
			burstEnabled: true,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 3,
			domain: 'test3.com',
			cpuCount: 3,
			burstEnabled: false,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 4,
			domain: 'test4.com',
			cpuCount: 4,
			burstEnabled: true,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 5,
			domain: 'test5.cloud',
			cpuCount: 5,
			burstEnabled: false,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 6,
			domain: 'test6.com',
			cpuCount: 6,
			burstEnabled: true,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 7,
			domain: 'test7.com',
			cpuCount: 7,
			burstEnabled: false,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 8,
			domain: 'test8.com',
			cpuCount: 8,
			burstEnabled: true,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 9,
			domain: 'test9.com',
			cpuCount: 9,
			burstEnabled: false,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 10,
			domain: 'test10.com',
			cpuCount: 10,
			burstEnabled: true,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 11,
			domain: 'test11.com',
			cpuCount: 11,
			burstEnabled: false,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
		{
			blogId: 12,
			domain: 'test12.com',
			cpuCount: 12,
			burstEnabled: true,
			spaceQuota: '214748364800',
			createdAt: 1723832909120,
		},
	];

	const fields = [
		{
			id: 'blogId',
			label: 'Site ID',
			enableHiding: false,
			getValue: ( field: SitesTableField ) => field.item.blogId,
		},
		{
			id: 'domain',
			label: 'Domain',
			enableHiding: false,
			getValue: ( field: SitesTableField ) => field.item.domain,
		},
		{
			id: 'cpuCount',
			label: 'CPU Count',
			enableHiding: false,
			getValue: ( field: SitesTableField ) => field.item.cpuCount,
		},
		{
			id: 'burstEnabled',
			label: 'Burst Enabled',
			enableHiding: false,
			getValue: ( field: SitesTableField ) => ( field.item.burstEnabled ? '➕' : '🚫' ),
		},
		{
			id: 'spaceQuota',
			label: 'Space Quota',
			enableHiding: false,
			getValue: ( field: SitesTableField ) => field.item.spaceQuota,
		},
		{
			id: 'createdAt',
			label: 'Created',
			enableHiding: false,
			getValue: ( field: SitesTableField ) => new Date( field.item.createdAt ).toString(),
		},
	];

	const view = {
		type: 'table',
		fields: [ 'blogId', 'domain', 'cpuCount', 'burstEnabled', 'spaceQuota', 'createdAt' ],
	} as ViewTable;

	const paginationInfo = {
		totalItems: 12,
		totalPages: 2,
	};

	return (
		<DataViews
			data={ data }
			fields={ fields }
			view={ view }
			onChangeView={ () => {} }
			actions={ [] }
			paginationInfo={ paginationInfo }
			getItemId={ ( item ) => item.blogId.toString() }
			defaultLayouts={ {
				table: {
					layout: {},
				},
			} }
		/>
	);
};

domReady( () => {
	// @ts-ignore
	const root = createRoot( document.getElementById( 'my-react-app' ) );

	root.render( <App /> );
} );
