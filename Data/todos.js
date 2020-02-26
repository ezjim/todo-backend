module.exports = [
    {
        task: 'Create a new b.eRepo, run bootstrap, npm init >enter>enter>etc, superagent,cors, morgan, pg, dotenv, delete WOW from gitignore',
        complete: true
    },
    {
        task: 'heroku create, !!the link to fetch data from db is the return of heroku create, copy that link and it will end with route (/api/todos to fetch data.)',
        complete: false
    },
    {
        task:  '(ALSO copy scripts that you need to run in VSCode>package.JSON from an old project.)',
        complete: false
    },
    {
        task: '!! Create (.env) file in VSCode> add (DATABASE_URL=">enter URI from heroku in this field<", also URL=">original link for fetching data<"',
        complete : false

    },
    {
        task: 'In Resources tab, Add Heroku Postgress > click on it > view credentials. this info is for PG admin setup.',
        complete: false
    },
    {
        task: 'In PGadmin, (Create newServer with rightclick> !!name it watever you want!!> enter in data from Heroku',
        complete: false
    }
];