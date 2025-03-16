import {
	INodeProperties,
} from 'n8n-workflow';

export const BotDescription: INodeProperties[] = [
	{
		displayName: 'Боты',
		name: 'bots',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'bots',
				],
			},
		},
		options: [
			{
				name: 'Получить',
				value: 'get',
				description: 'Получить список ботов ',
				action: 'BotList',
			},
		],
		default: 'BotList',
	},
];
