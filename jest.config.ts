import { Config } from "@jest/types";
import base from "./jest.base";
import { name } from "./package.json";
import { compilerOptions } from "./tsconfig.paths.json";

const ROOTS = ["__tests__", "src"] as const;

const projects = Object.keys(compilerOptions.paths);

const config: Config.InitialOptions = {
  testTimeout: 30000,
  projects: projects.map((projectName) => {
    const pathSafeName = projectName.replace("@", "");
    return {
      ...base,
      displayName: `${name}/${projectName}`,
      testMatch: ["**/*.spec.ts"],
      roots: ROOTS.map(
        (folderName) => `<rootDir>/packages/${pathSafeName}/${folderName}`
      ),
    };
  }),
};

export default config;
