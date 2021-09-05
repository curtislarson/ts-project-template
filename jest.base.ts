import { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import { compilerOptions } from "./tsconfig.paths.json";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-extended"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "js", "node"],
  testTimeout: 30000,
  moduleNameMapper: {
    "^@([^/]*)/test/(.*)$": "<rootDir>/packages/$1/test/$2",
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
  },
};
export default config;
