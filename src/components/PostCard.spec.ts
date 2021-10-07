import { shallowMount } from "@vue/test-utils";
import { User, Post } from "@/typings";
import PostCard from "./PostCard.vue";

const user: User = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const post: Post = {
  userId: 1,
  id: 3,
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
};

describe("PostCard.vue", () => {
  it("renders post prop when passed", () => {
    const wrapper = shallowMount(PostCard, {
      props: { user, post },
    });
    expect(wrapper.text()).toMatch(post.title);
  });

  it("renders user prop when passed", () => {
    const wrapper = shallowMount(PostCard, {
      props: { user, post },
    });
    expect(wrapper.text()).toMatch(user.name);
  });
});
