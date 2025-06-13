
// @require ./insert_selectors.ts

function insertContent<T extends ArrayLike<EleLoose> = ArrayLike<EleLoose>> ( selectors: ArrayLike<Selector>, anchors: T, inverse?: boolean, left?: boolean, inside?: boolean, reverseLoop1?: boolean, reverseLoop2?: boolean, reverseLoop3?: boolean ): T {

  if (!isCash ( selectors ) && isString ( selectors[0] ) && !htmlRe.test ( selectors[0] )) {
    arguments[0] = [doc.createTextNode(selectors[0])];
  }

  return insertSelectors ( ...arguments );

}
