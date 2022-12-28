---
title: "All you need to know about html forms"
date: "2022-12-10"
imageURL: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
excerpt: "HTML Form is a document that stores information of a user on a web server using interactive controls. An HTML form contains different kinds of information such as username, password, contact number, email id, etc."
author: "Ahmed Abdella"
tags: ["react", "next", "typescript", "tailwind"]

isFeatured: true
---

## All you need to know about htm forms

```html
<fieldset>
  <span>Billing Address</span><input type="text" /> <span>City</span
  ><input type="text" /> <span>Province</span><input type="text" />
  <span>Postal Code</span><input type="text" />
</fieldset>
<fieldset>
  <span>Shipping Address</span><input type="text" /> <span>City</span
  ><input type="text" /> <span>Province</span><input type="text" />
  <span>Postal Code</span><input type="text" />
</fieldset>
```

`console.log("abdella")`

![demo of html form](https://img.freepik.com/free-photo/vestrahorn-mountains-sunset-stokksnes-iceland_335224-574.jpg?w=1060&t=st=1672068791~exp=1672069391~hmac=c931050138cf1774ef212cfa5a5903661c08b9ac0957d6b671061e52642515ef "HTML form")

```javascript

export default function ({ post }: { post: postDataType }) {
  const components: any = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          style={materialDark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
```

hello from the outside

```bash
npm install react-router-dom
```

## a7a
