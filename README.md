# Unsere Gelder Tools

Web tools for manipulating data[D[D[D[D[D budget data

## Getting Started

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://lolg.it/amber/amber#prerequisities).

## Use UnsereGelderTools as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
npm install UnsereGelderTools --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use UnsereGelderTools,
add `'amber-unseregeldertools/UnsereGelderTools'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm run init
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
