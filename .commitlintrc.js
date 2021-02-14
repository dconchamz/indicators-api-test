module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "FEATURE"]],
    "type-case": [0, "always", ["lower-case"]],
  },
};
