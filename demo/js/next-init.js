/**
 * next-init.js
 * Contains Next.js initialization scripts.
 * The following example extracts the __next_f.push calls from the inline scripts.
 */
(function () {
    // Ensure __next_f exists
    if (!self.__next_f) self.__next_f = [];
  
    // Example initialization pushes (extracted from your original file)
    self.__next_f.push([0]);
    self.__next_f.push([
      1,
      '"$Sreact.fragment"',
      2,
      [
        "$",
        "$1",
        "c",
        {
          children: [
            [
              "$",
              "$L6",
              null,
              {
                Component: "$7",
                searchParams: {},
                params: {},
                promises: ["$@8", "$@9"],
              },
            ],
            null,
            ["$", "$La", null, { children: "$Lb" }],
          ],
        },
        {},
        null,
        false,
      ],
    ]);
    // ... (Include other __next_f.push calls as needed)
  })();
  