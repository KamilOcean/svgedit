var svgEditorLang_pl = (function () {
  'use strict';

  var lang_pl = {
    lang: 'pl',
    dir: 'ltr',
    author: 'Aleksander Lurie',
    common: {
      ok: 'OK',
      cancel: 'Anuluj',
      key_backspace: 'usuń',
      key_del: 'usuń',
      key_down: 'w dół',
      key_up: 'w górę',
      more_opts: 'więcej opcji',
      url: 'adres url',
      width: 'Szerokość',
      height: 'Wysokość'
    },
    misc: {
      powered_by: 'Powered by'
    },
    ui: {
      toggle_stroke_tools: 'Pokaż/ukryj więcej opcji obramowania',
      palette_info: 'Kliknij aby zmienić kolor wypełnienia, przytrzymaj shift aby zmienić kolor obramowania',
      zoom_level: 'Zmiana powiększenia',
      panel_drag: 'Przeciągnij w lewo/prawo aby zmienić szerokość panelu',
      quality: 'Quality:',
      pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
      pathCtrlPtTooltip: 'Drag control point to adjust curve properties',
      pick_stroke_paint_opacity: 'Pick a Stroke Paint and Opacity',
      pick_fill_paint_opacity: 'Pick a Fill Paint and Opacity'
    },
    properties: {
      id: 'Identyfikator elementu',
      fill_color: 'Zmień kolor wypełnienia',
      stroke_color: 'Zmień kolor obramowania',
      stroke_style: 'Zmień styl obramowania',
      stroke_width: 'Zmień szerokość obramowania o 1, przytrzymaj shift aby zmienić szerokość o 0.1',
      pos_x: 'Zmień współrzędną X',
      pos_y: 'Zmień współrzędną Y',
      linecap_butt: 'Zakończenie linii: grzbiet',
      linecap_round: 'Zakończenie linii: zaokrąglone',
      linecap_square: 'Zakończenie linii: kwadrat',
      linejoin_bevel: 'Łączenie linii: ścięte',
      linejoin_miter: 'Łączenie linii: ostre',
      linejoin_round: 'Łączenie linii: zaokrąglone',
      angle: 'Zmień kąt obrotu',
      blur: 'Zmień wartość rozmycia gaussa',
      opacity: 'Zmień przezroczystość zaznaczonego elementu',
      circle_cx: 'Zmień współrzędną cx okręgu',
      circle_cy: 'Zmień współrzędną cy okręgu',
      circle_r: 'zmień promień okręgu',
      ellipse_cx: 'Zmień współrzędną cx elipsy',
      ellipse_cy: 'Zmień współrzędną cy elipsy',
      ellipse_rx: 'Zmień promień x elipsy',
      ellipse_ry: 'Zmień promień y elipsy',
      line_x1: 'Zmień współrzędna x początku linii',
      line_x2: 'Zmień współrzędną x końca linii',
      line_y1: 'Zmień współrzędną y początku linii',
      line_y2: 'Zmień współrzędną y końca linii',
      rect_height: 'Zmień wysokość prostokąta',
      rect_width: 'Zmień szerokość prostokąta',
      corner_radius: 'Zmień promień zaokrąglenia narożników prostokąta',
      image_width: 'Zmień wysokość obrazu',
      image_height: 'Zmień szerokość obrazu',
      image_url: 'Zmień adres URL',
      node_x: 'Zmień współrzędną x węzła',
      node_y: 'Zmień współrzędną y węzła',
      seg_type: 'Zmień typ segmentu',
      straight_segments: 'Prosty',
      curve_segments: 'Zaokrąglony',
      text_contents: 'Zmień text',
      font_family: 'Zmień krój czcionki',
      font_size: 'Zmień rozmiar czcionki',
      bold: 'Pogrubienie textu',
      italic: 'Kursywa'
    },
    tools: {
      main_menu: 'Menu główne',
      bkgnd_color_opac: 'Zmiana koloru/przezroczystości tła',
      connector_no_arrow: 'Brak strzałek',
      fitToContent: 'Dopasuj do zawartości',
      fit_to_all: 'Dopasuj do całej zawartości',
      fit_to_canvas: 'Dopasuj do widoku',
      fit_to_layer_content: 'Dopasuj do zawartości warstwy',
      fit_to_sel: 'Dopasuj do zaznaczenia',
      align_relative_to: 'Wyrównaj relatywnie do ...',
      relativeTo: 'relatywnie do:',
      page: 'strona',
      largest_object: 'największy obiekt',
      selected_objects: 'zaznaczone obiekty',
      smallest_object: 'najmniejszy obiekt',
      new_doc: 'Nowy obraz',
      open_doc: 'Otwórz obraz',
      export_img: 'Eksportuj',
      save_doc: 'Zapisz obraz',
      import_doc: 'Importuj SVG',
      align_to_page: 'Wyrównaj element do strony',
      align_bottom: 'Wyrównaj do dołu',
      align_center: 'Wyśrodkuj w poziomie',
      align_left: 'Wyrównaj do lewej',
      align_middle: 'Wyśrodkuj w pionie',
      align_right: 'Wyrównaj do prawej',
      align_top: 'Wyrównaj do góry',
      mode_select: 'Zaznaczenie',
      mode_fhpath: 'Ołówek',
      mode_line: 'Linia',
      mode_rect: 'Prostokąt',
      mode_square: 'Kwadrat',
      mode_fhrect: 'Dowolny prostokąt',
      mode_ellipse: 'Elipsa',
      mode_circle: 'Okrąg',
      mode_fhellipse: 'Dowolna elipsa',
      mode_path: 'Ścieżka',
      mode_text: 'Tekst',
      mode_image: 'Obraz',
      mode_zoom: 'Powiększenie',
      no_embed: 'Uwaga: Ten obraz nie może być osadzony. Być może podany adres na to nie pozwala',
      undo: 'Wstecz',
      redo: 'Dalej',
      tool_source: 'Edytuj źródło',
      wireframe_mode: 'Tryb szkieletowy',
      clone: 'Klonuj element(y)',
      del: 'Usuń warstwę',
      group_elements: 'Grupuj elementy',
      make_link: 'Utwórz łącze',
      set_link_url: 'Ustal adres URL (pozostaw puste aby usunąć)',
      to_path: 'Konwertuj do ścieżki',
      reorient_path: 'Zresetuj obwiednię',
      ungroup: 'Rozgrupuj elementy',
      docprops: 'Właściwości dokumentu',
      editor_homepage: 'SVG-Edit Home Page',
      move_bottom: 'Przenieś pod spód',
      move_top: 'Przenieś na wierzch',
      node_clone: 'Klonuj węzeł',
      node_delete: 'Usuń węzeł',
      node_link: 'Podłącz punkty kontrolne',
      add_subpath: 'Dodaj ścieżkę podrzędną',
      openclose_path: 'Otwórz/zamknij ścieżkę podrzędną',
      source_save: 'Zachowaj zmiany',
      cut: 'Wytnij',
      copy: 'Kopiuj',
      paste: 'Wklej',
      paste_in_place: 'Wklej w miejscu',
      delete: 'Usuń',
      group: 'Grupuj',
      move_front: 'Przenieś do przodu',
      move_up: 'Przenieś warstwę w górę',
      move_down: 'Przenieś warstwę w dół',
      move_back: 'Przenieś do tyłu'
    },
    layers: {
      layer: 'Warstwa',
      layers: 'Warstwy',
      del: 'Usuń warstwę',
      move_down: 'Przenieś warstwę w dół',
      new: 'Nowa warstwa',
      rename: 'Zmień nazwę warstwy',
      move_up: 'Przenieś warstwę w górę',
      dupe: 'Duplikuj warstwę',
      merge_down: 'Scal w dół',
      merge_all: 'Scal  wszystko',
      move_elems_to: 'Przenieś elementy do:',
      move_selected: 'Przenieś zaznaczone elementy do innej warstwy'
    },
    config: {
      image_props: 'Własciwości obrazu',
      doc_title: 'Tytuł',
      doc_dims: 'Wymiary pola roboczego',
      included_images: 'Dołączone obrazy',
      image_opt_embed: 'Dane osadzone (pliki lokalne)',
      image_opt_ref: 'Użyj referencji do pliku',
      editor_prefs: 'Ustawienia edytora',
      icon_size: 'Rozmiar ikon',
      language: 'Język',
      background: 'Tło edytora',
      editor_img_url: 'Adres URL obrazu',
      editor_bg_note: 'Uwaga: Tło nie zostało zapisane z obrazem.',
      icon_large: 'Duże',
      icon_medium: 'Średnie',
      icon_small: 'Małe',
      icon_xlarge: 'Bardzo duże',
      select_predefined: 'Wybierz predefiniowany:',
      units_and_rulers: 'Jednostki/Linijki',
      show_rulers: 'Pokaż linijki',
      base_unit: 'Podstawowa jednostka:',
      grid: 'Siatka',
      snapping_onoff: 'Włącz/wyłącz przyciąganie',
      snapping_stepsize: 'Przyciągaj co:',
      grid_color: 'Kolor siatki'
    },
    notification: {
      invalidAttrValGiven: 'Podano nieprawidłową wartość',
      noContentToFitTo: 'Brak zawartości do dopasowania',
      dupeLayerName: 'Istnieje już warstwa o takiej nazwie!',
      enterUniqueLayerName: 'Podaj unikalną nazwę warstwy',
      enterNewLayerName: 'Podaj nazwe nowej warstwy',
      layerHasThatName: 'Warstwa już tak się nazywa',
      QmoveElemsToLayer: 'Przenies zaznaczone elementy do warstwy \'%s\'?',
      QwantToClear: 'Jesteś pewien, że chcesz wyczyścić pole robocze?\nHistoria projektu również zostanie skasowana',
      QwantToOpen: 'Jesteś pewien, że chcesz otworzyć nowy plik?\nHistoria projektu również zostanie skasowana',
      QerrorsRevertToSource: 'Błąd parsowania źródła Twojego pliku SVG.\nPrzywrócić orginalne źródło pliku SVG?',
      QignoreSourceChanges: 'Zignorowac zmiany w źródle pliku SVG?',
      featNotSupported: 'Funkcjonalność niedostępna',
      enterNewImgURL: 'Podaj adres URL nowego obrazu',
      defsFailOnSave: 'Uwaga: Ze względu na błąd w przeglądarce, ten obraz może się źle wyswietlać (brak gradientów lub elementów). Będzie jednak wyświetlał się poprawnie skoro został zapisany.',
      loadingImage: 'Ładowanie obrazu, proszę czekać...',
      saveFromBrowser: "Select 'Save As...' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.",
      noteTheseIssues: 'Zwróć uwagę na nastepujące kwestie: ',
      unsavedChanges: 'Wykryto niezapisane zmiany.',
      enterNewLinkURL: 'Wpisz nowy adres URL hiperłącza',
      errorLoadingSVG: 'Błąd: Nie można załadować danych SVG',
      URLLoadFail: 'Nie można załadować z adresu URL',
      retrieving: 'Retrieving \'%s\' ...',
      popupWindowBlocked: 'Popup window may be blocked by browser',
      exportNoBlur: 'Blurred elements will appear as un-blurred',
      exportNoforeignObject: 'foreignObject elements will not appear',
      exportNoDashArray: 'Strokes will appear filled',
      exportNoText: 'Text may not appear as expected'
    }
  };

  return lang_pl;

}());
