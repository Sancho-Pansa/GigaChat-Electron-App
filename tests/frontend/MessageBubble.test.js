import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import MessageBubble from "../../src/renderer/MessageBubble.vue";

describe("Test Frontend functions", () => {
    test("Renders the file", async () => {
        const wrapper = mount(MessageBubble, {
            props: {
                text: "Hello",
                speaker: "bot"
            }
        });
        console.log(wrapper.html());
        expect(wrapper.text()).toBeDefined();
    })
});