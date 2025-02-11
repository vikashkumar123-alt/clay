/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Form from '@clayui/form';
import Icon from '@clayui/icon';
import Label from '@clayui/label';
import Layout from '@clayui/layout';
import {useId} from '@clayui/shared';
import React from 'react';

import {Option, Picker} from '../src/picker';
import {Text} from '../src/typography';

export default {
	component: Picker,
	title: 'Design System/Components/Picker',
};

export const Default = () => {
	const pickerId = useId();
	const labelId = useId();

	return (
		<div style={{width: '150px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a fruit
				</label>
				<Picker aria-labelledby={labelId} id={pickerId}>
					<Option key="apple">Apple</Option>
					<Option disabled key="banana">
						Banana
					</Option>
					<Option key="mangos">Mangos</Option>
					<Option key="blueberry">Blueberry</Option>
					<Option key="boysenberry">Boysenberry</Option>
					<Option key="cherry">Cherry</Option>
					<Option key="cranberry">Cranberry</Option>
					<Option key="eggplant">Eggplant</Option>
					<Option key="fig">Fig</Option>
					<Option key="grape">Grape</Option>
					<Option key="guava">Guava</Option>
					<Option key="huckleberry">Huckleberry</Option>
				</Picker>
			</Form.Group>
		</div>
	);
};

export const Dynamic = () => {
	const pickerId = useId();
	const labelId = useId();

	return (
		<div style={{width: '150px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a fruit
				</label>
				<Picker
					aria-labelledby={labelId}
					id={pickerId}
					items={[
						'Apple',
						'Banana',
						'Mangos',
						'Blueberry',
						'Boysenberry',
						'Cherry',
						'Cranberry',
						'Eggplant',
						'Fig',
						'Grape',
						'Guava',
						'Huckleberry',
					]}
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</Form.Group>
		</div>
	);
};

const Trigger = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, ...otherProps}, ref) => (
	<div ref={ref} {...otherProps} tabIndex={0}>
		<Icon className="mr-2" symbol="user" />
		{children}
	</div>
));

Trigger.displayName = 'Trigger';

export const CustomTrigger = () => {
	const pickerId = useId();
	const labelId = useId();

	return (
		<div style={{width: '180px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a user
				</label>
				<Picker
					aria-labelledby={labelId}
					as={Trigger}
					id={pickerId}
					items={['Liam', 'Noah', 'Oliver']}
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</Form.Group>
		</div>
	);
};

export const CustomOptions = () => {
	const pickerId = useId();
	const labelId = useId();

	return (
		<div style={{width: '180px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a user
				</label>
				<Picker
					aria-labelledby={labelId}
					id={pickerId}
					items={['Liam', 'Noah', 'Oliver']}
				>
					{(item) => (
						<Option key={item} textValue={item}>
							<Layout.ContentRow>
								<Layout.ContentCol expand>
									<Text size={3} weight="semi-bold">
										{item}
									</Text>
									<Text color="secondary" size={2}>
										Description
									</Text>
								</Layout.ContentCol>
								<Layout.ContentCol>
									<Label displayType="success">Active</Label>
								</Layout.ContentCol>
							</Layout.ContentRow>
						</Option>
					)}
				</Picker>
			</Form.Group>
		</div>
	);
};
