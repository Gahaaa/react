import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData, Form, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { createStory, getStories } from "../../lib/api";

export const loader = async () => {
  const stories = await getStories();
  return json(stories);
};

export async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const story = await createStory({ title, body });
  return redirect(`/stories/${story.id}`);
}

export default function Stories() {
  const stories = useLoaderData();
  const transition = useTransition(); // Form의 상태를 조회할때 사용

  const ref = useRef();
  // state값이 submitting으로 변하는 시점을 감지하여 form Dom의 reset함수를 호출 해준다.
  useEffect(() => {
    if (transition.state === "submitting") {
      ref.current?.reset();
    }
  }, [transition.state]);

  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link to={`/stories/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
      <Form method="post" ref={ref}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: 320,
          }}
        >
          <input type="text" name="title" placeholder="제목을 입력하세요..." />
          <textarea name="body" placeholder="이야기를 입력하세요..." />
          <button type="submit">
            {transition.state === "submitting" ? "등록 중..." : "등록"}
          </button>
        </div>
      </Form>
    </div>
  );
}
