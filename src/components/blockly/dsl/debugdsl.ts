import jsep from "jsep"
import { makeVMBase } from "../../jacscript/JacscriptGenerator"
import ConsoleField from "../fields/ConsoleField"
import VariablesField from "../fields/VariablesFields"
import {
    BlockReference,
    CODE_STATEMENT_TYPE,
    InputDefinition,
    toolsColour,
} from "../toolbox"
import BlockDomainSpecificLanguage, { CompileCommandToVMOptions } from "./dsl"

const VARIABLES_BLOCK = "jacdac_variables_view"
const colour = toolsColour
const LOG_BLOCK = "jacdac_log"
const LOG_VALUE_BLOCK = "jacdac_log_value"
const CONSOLE_BLOCK = "jacdac_console_display"

const debugDsl: BlockDomainSpecificLanguage = {
    id: "debug",
    createBlocks: () => [
        {
            kind: "block",
            type: LOG_BLOCK,
            message0: `log %1`,
            args0: [
                <InputDefinition>{
                    type: "input_value",
                    name: "value",
                },
            ],
            colour,
            inputsInline: true,
            previousStatement: CODE_STATEMENT_TYPE,
            nextStatement: CODE_STATEMENT_TYPE,
            tooltip: `Log an entry to the console`,
            helpUrl: "",
        },
        {
            kind: "block",
            type: LOG_VALUE_BLOCK,
            message0: `log value %1 = %2`,
            args0: [
                <InputDefinition>{
                    type: "input_value",
                    name: "value",
                },
                <InputDefinition>{
                    type: "input_value",
                    name: "arg",
                },
            ],
            colour,
            inputsInline: true,
            previousStatement: CODE_STATEMENT_TYPE,
            nextStatement: CODE_STATEMENT_TYPE,
            tooltip: `Log a name value pair to the console`,
            helpUrl: "",
        },
        {
            kind: "block",
            type: CONSOLE_BLOCK,
            message0: `console %1 %2`,
            args0: [
                {
                    type: "input_dummy",
                },
                <InputDefinition>{
                    type: ConsoleField.KEY,
                    name: "console",
                },
            ],
            colour,
            inputsInline: false,
            tooltip: `Display console messages`,
            helpUrl: "",
            template: "meta",
        },
        {
            kind: "block",
            type: VARIABLES_BLOCK,
            message0: `variables %1 %2`,
            args0: [
                {
                    type: "input_dummy",
                },
                {
                    type: VariablesField.KEY,
                    name: "variables",
                },
            ],
            colour,
            inputsInline: false,
            tooltip: `Watch variables values`,
            helpUrl: "",
            template: "meta",
        },
    ],
    createCategory: () => [
        {
            kind: "category",
            name: "Debug",
            colour,
            contents: [
                <BlockReference>{
                    kind: "block",
                    type: LOG_BLOCK,
                    values: {
                        value: { kind: "block", type: "text" },
                    },
                },
                <BlockReference>{
                    kind: "block",
                    type: LOG_VALUE_BLOCK,
                    values: {
                        value: { kind: "block", type: "text" },
                        arg: { kind: "block", type: "math_number" },
                    },
                },
                <BlockReference>{
                    kind: "block",
                    type: CONSOLE_BLOCK,
                },
                <BlockReference>{
                    kind: "block",
                    type: VARIABLES_BLOCK,
                },
            ],
        },
    ],
    compileCommandToVM: (options: CompileCommandToVMOptions) => {
        const { block, blockToExpression } = options
        const { type, inputs } = block
        switch (type) {
            case LOG_VALUE_BLOCK: {
                const exprsErrors = inputs
                    .filter(i => i.child)
                    .map(a => blockToExpression(undefined, a.child))
                return {
                    cmd: makeVMBase(block, {
                        type: "CallExpression",
                        arguments: exprsErrors.map(e => e.expr),
                        callee: <jsep.Literal>{
                            type: "Literal",
                            raw: "console.log",
                        },
                    }),
                    errors: exprsErrors.flatMap(e => e.errors),
                }
            }
            case LOG_BLOCK: {
                const { expr, errors } = blockToExpression(
                    undefined,
                    inputs[0].child
                )
                return {
                    cmd: makeVMBase(block, {
                        type: "CallExpression",
                        arguments: [expr],
                        callee: <jsep.Literal>{
                            type: "Literal",
                            raw: "console.log",
                        },
                    }),
                    errors,
                }
            }
            default:
                console.log(type)
                break
        }
    },
}

export default debugDsl