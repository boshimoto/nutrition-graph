import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../components/table/tablehead/tablehead.js';

describe('TableHeadElement', () => {

	it('has default category value', async () => {
		const element = await fixture(html`<table-head-element></table-head-element`);
		expect(element.category).to.equal('');
	});

	it('can set category attribute', async () => {
		const category = 'test';
		const element = await fixture(html`<table-head-element category=${category}></table-head-element`);
		expect(element.category).to.equal('test');
	});

	it('can verify click event returns category', async () => {
		const category = 'test';
		const element = await fixture(html`<table-head-element category=${category}></table-head-element`);
		setTimeout(() => element.handleClick());

		const { detail } = await oneEvent(element, 'selected-category');
		expect(detail.selected).to.equal('test');
	});
});