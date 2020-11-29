<script>
	import { firstRowToDisplay } from '../stores/pagination.js';
	import Tabular from '../components/Tabular.svelte'
	import { PersonData } from '../assets/testdata.js'
	
	// Called by the Tabular component to retrieve a specific ste to
	const getPersonData = ((startingRow, noRowsToGet) => {
		return noRowsToGet > 0 ? PersonData.slice(startingRow, startingRow+noRowsToGet) : PersonData.slice(startingRow)
	})

	const personRpt = {
		dataSource: {
			reader: getPersonData,
			rowsPerPage: 4, // Specify -1 for all rows
			totalRows: PersonData.length,
		},
		columns: [
			{ type: 'image', heading: 'Avatar', dataName: 'avatarImg' },
			{ type: 'text', heading: 'email', dataName: 'email' },
			{ type: 'text', heading: 'Last Name', dataName: 'lastName' },
			{ type: 'text', heading: 'First Name', dataName: 'firstName' },
			{ type: 'pill', heading: 'Status', dataName: 'status',
					decorators: [ 
						{ value: 'Active', pillColor: 'bg-green-400' },
						{ value: 'Inactive', pillColor: 'bg-red-400' },
					]
			}
		]
	}

	firstRowToDisplay.reset(0)
</script>

<svelte:head>
	<title>Tabular Data Test</title>
</svelte:head>

<h1>Tabular Data Test</h1>

<Tabular definition={ personRpt } />

<style type="text/postcss">
	h1 {
		@apply text-center text-5xl text-green-700 uppercase font-semibold mb-2;
	}
</style>