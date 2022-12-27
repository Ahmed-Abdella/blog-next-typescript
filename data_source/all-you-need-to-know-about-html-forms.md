---
title: "All you need to know about html forms"
date: "2022-12-10"
imageURL: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
excerpt: "HTML Form is a document that stores information of a user on a web server using interactive controls. An HTML form contains different kinds of information such as username, password, contact number, email id, etc."
author: "Ahmed Abdella"
tags: ["react", "next", "typescript", "tailwind"]

isFeatured: true
---

# All you need to know about htm forms

![demo of html form](https://miro.medium.com/max/786/1*7dd2MZ78ekF3bA3N0Jlvmw.gif "HTML form")

```html
<fieldset>
  <span>Billing Address</span><input type="text" /> <span>City</span
  ><input type="text" /> <span>Province</span><input type="text" />
  <span>Postal Code</span><input type="text" />
</fieldset>
<fieldset>
  <span>Shipping Address</span><input type="text" /> <span>City</span
  ><input type="text" /> <span>Province</span><input type="text" /> <span>Shipping Address</span><input type="text" /> <span>City</span
  <span>Postal Code</span><input type="text" />
</fieldset>
```

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
