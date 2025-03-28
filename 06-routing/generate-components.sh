#!/usr/bin/env sh

cd src

generateComponent()
{
  echo "import './$1.css'
  export function $1() {
      return (
          <>
              <h1>$1 component works!</h1>
          </>
      )
  }
  " >> $2
}

for i in main admin guest; do
    name="$(echo "$i" | sed 's/.*/\u&/')"
    mkdir $i
    touch $i/$name.tsx $i/$name.css
    generateComponent $name $i/$name.tsx
done

for i in dasboard manage-clients manage-stocks; do
    name="$(echo "$i" | sed 's/.*/\u&/')"
    mkdir admin/$i
    touch admin/$i/$name.tsx admin/$i/$name.css
    generateComponent $name admin/$i/$name.tsx
done

for i in dasboard view-clients view-stocks; do
    name="$(echo "$i" | sed 's/.*/\u&/')"
    mkdir guest/$i
    touch guest/$i/$name.tsx guest/$i/$name.css
    generateComponent $name guest/$i/$name.tsx
done


