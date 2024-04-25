$(function () {

  // Initialize button texts for all buttons
  setCheckboxSelectLabels('btn_selection1', 'Categories1');
  setCheckboxSelectLabels('btn_selection2', 'Categories2');
  setCheckboxSelectLabels('btn_selection3', 'Categories3');
  setCheckboxSelectLabels('btn_selection4', 'Categories4');
  setCheckboxSelectLabels('btn_selection5', 'Categories5');
  setCheckboxSelectLabels('btn_selection6', 'Categories6');
  setCheckboxSelectLabels('btn_selection7', 'Categories7');

  $('.toggle-next').click(function () {
    $(this).next('.checkboxes').slideToggle(400);
  });

  $('.ckkBox').change(function () {
    toggleCheckedAll(this);
    setCheckboxSelectLabels('btn_selection1', 'Categories1');
    setCheckboxSelectLabels('btn_selection2', 'Categories2');
    setCheckboxSelectLabels('btn_selection3', 'Categories3');
    setCheckboxSelectLabels('btn_selection4', 'Categories4');
  });

  // Select all checkboxes in "All Spaces" category by default
  $('.ckkBox.all').prop('checked', true).change();

});

function setCheckboxSelectLabels(btnId, categoriesId) {
  var checkboxes = $('#' + categoriesId).find('.ckkBox');
  var label = $('#' + categoriesId).attr('id');
  var prevText = '';
  var btnText = '';
  var numberOfChecked = $('#' + categoriesId).find('input.val:checkbox:checked').length;
  if (numberOfChecked >= 4) {
    btnText = numberOfChecked + ' ' + label + ' selected';
  } else {
    $.each(checkboxes, function (i, checkbox) {
      if ($(checkbox).prop('checked') == true) {
        var text = $(checkbox).next().html();
        btnText += text + ', ';
      }
    });
    btnText = btnText.slice(0, -2); // Remove trailing comma and space
  }
  $('#' + btnId).text(btnText);
}

function toggleCheckedAll(checkbox) {
  var apply = $(checkbox).closest('.wrapper').find('.apply-selection');
  apply.fadeIn('slow');

  var val = $(checkbox).closest('.checkboxes').find('.val');
  var all = $(checkbox).closest('.checkboxes').find('.all');
  var ckkBox = $(checkbox).closest('.checkboxes').find('.ckkBox');

  if (!$(ckkBox).is(':checked')) {
    $(all).prop('checked', true);
    return;
  }

  if ($(checkbox).hasClass('all')) {
    $(val).prop('checked', false);
  } else {
    $(all).prop('checked', false);
  }
}



// Function to handle the removal of condition row
function removeConditionRow(event) {
  const rowToRemove = event.target.closest('.cus_row');
  if (rowToRemove) {
    rowToRemove.remove();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.querySelector('.cus_addition');

  addButton.addEventListener('click', function () {
    const rowContainer = document.querySelector('.row.justify-content-center');
    const newRow = document.createElement('div');
    newRow.classList.add('col-12', 'cus_row');
    newRow.innerHTML = `
        <div class="d-flex justify-content-between border-0 align-middle bg-light">
        <div class="d-flex align-items-center px-3">
          <div class="">
            <button id="btn_selection5"
              class="form-control bg-transparent text_red border-0 toggle-next ellipsis">
              All Spaces
              <span><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="checkboxes select_button" id="Categories5">
              <label class="apply-selection">
                <input type="checkbox" value="" class="ajax-link" />
                &#x2714; apply selection
              </label>

              <div class="inner-wrap">
                <label>
                  <input type="checkbox" value="all_spaces" class="ckkBox all" />
                  <span>All spaces</span> </label><br />

                <label>
                  <input type="checkbox" value="urban" class="ckkBox val" />
                  <span>Urban Picth</span> </label><br />

                <label>
                  <input type="checkbox" value="suburban" class="ckkBox val" />
                  <span>Suburban Pitch</span> </label><br />

                <label>
                  <input type="checkbox" value="rural" class="ckkBox val" />
                  <span>Rural Pitch</span> </label><br />

                <label>
                  <input type="checkbox" value="coastal" class="ckkBox val" />
                  <span>Coastal Pitch</span> </label><br />

                <label>
                  <input type="checkbox" value="indoor" class="ckkBox val" />
                  <span>Indoor Pitch</span> </label>
              </div>
            </div>
          </div>
          <div class="">
            Are Available Between
          </div>
          <div class="">to</div>
          <div class="">
            <select class="form-select bg-transparent ft_16 border-0 text_red form-select-sm"
              aria-label="From Time">
              <option value="12:00AM">12:00 AM</option>
              <option value="01:00AM">1:00 AM</option>
              <option value="02:00AM">2:00 AM</option>
              <option value="03:00AM">3:00 AM</option>
              <option value="04:00AM">4:00 AM</option>
              <option value="05:00AM">5:00 AM</option>
              <option value="06:00AM">6:00 AM</option>
              <option value="07:00AM">7:00 AM</option>
              <option value="08:00AM">8:00 AM</option>
              <option value="09:00AM">9:00 AM</option>
              <option value="10:00AM">10:00 AM</option>
              <option value="11:00AM">11:00 AM</option>
              <option value="12:00PM">12:00 PM</option>
              <option value="01:00PM">1:00 PM</option>
              <option value="02:00PM">2:00 PM</option>
              <option value="03:00PM">3:00 PM</option>
              <option value="04:00PM">4:00 PM</option>
              <option value="05:00PM">5:00 PM</option>
              <option value="06:00PM">6:00 PM</option>
              <option value="07:00PM">7:00 PM</option>
              <option value="08:00PM">8:00 PM</option>
              <option value="09:00PM">9:00 PM</option>
              <option value="10:00PM">10:00 PM</option>
              <option value="11:00PM">11:00 PM</option>
            </select>
          </div>
          <div class="">to</div>
          <div class="">
            <select class="form-select bg-transparent ft_16 border-0 text_red form-select-sm"
              aria-label="From Time">
              <option value="12:00AM">12:00 AM</option>
              <option value="01:00AM">1:00 AM</option>
              <option value="02:00AM">2:00 AM</option>
              <option value="03:00AM">3:00 AM</option>
              <option value="04:00AM">4:00 AM</option>
              <option value="05:00AM">5:00 AM</option>
              <option value="06:00AM">6:00 AM</option>
              <option value="07:00AM">7:00 AM</option>
              <option value="08:00AM">8:00 AM</option>
              <option value="09:00AM">9:00 AM</option>
              <option value="10:00AM">10:00 AM</option>
              <option value="11:00AM">11:00 AM</option>
              <option value="12:00PM">12:00 PM</option>
              <option value="01:00PM">1:00 PM</option>
              <option value="02:00PM">2:00 PM</option>
              <option value="03:00PM">3:00 PM</option>
              <option value="04:00PM">4:00 PM</option>
              <option value="05:00PM">5:00 PM</option>
              <option value="06:00PM">6:00 PM</option>
              <option value="07:00PM">7:00 PM</option>
              <option value="08:00PM">8:00 PM</option>
              <option value="09:00PM">9:00 PM</option>
              <option value="10:00PM">10:00 PM</option>
              <option value="11:00PM">11:00 PM</option>
            </select>
          </div>
          <div class="">
            <button id="btn_selection6"
              class="form-control bg-transparent text_red border-0 toggle-next ellipsis">
              All Days
              <span><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="checkboxes select_button" id="Categories6">
              <label class="apply-selection">
                <input type="checkbox" value="" class="ajax-link" />
                &#x2714; apply selection
              </label>

              <div class="inner-wrap">
                <label>
                  <input type="checkbox" value="all_days" class="ckkBox all" />
                  <span>All Days</span> </label><br />

                <label>
                  <input type="checkbox" value="sun" class="ckkBox val" />
                  <span>Sun</span> </label><br />

                <label>
                  <input type="checkbox" value="mon" class="ckkBox val" />
                  <span>Mon</span> </label><br />

                <label>
                  <input type="checkbox" value="tue" class="ckkBox val" />
                  <span>Tue</span> </label><br />

                <label>
                  <input type="checkbox" value="wed" class="ckkBox val" />
                  <span>Wed</span> </label><br />

                <label>
                  <input type="checkbox" value="thu" class="ckkBox val" />
                  <span>Thu</span> </label><br />

                <label>
                  <input type="checkbox" value="fri" class="ckkBox val" />
                  <span>Fri</span> </label><br />

                <label>
                  <input type="checkbox" value="sat" class="ckkBox val" />
                  <span>Sat</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="m-0 p-0">
          <button type="button"
            class="btn btn_green btn_remove text-decoration-underline btn-sm px-5 py-3 rounded-0 w-100">
            Remove
          </button>
        </div>
      </div>
      `;

    const parentRow = document.createElement('div');
    parentRow.classList.add('prent_row');
    parentRow.appendChild(newRow);

    rowContainer.insertBefore(parentRow, rowContainer.lastElementChild);

    // Add event listener to the newly added remove button
    const removeButton = newRow.querySelector('.btn_remove');
    removeButton.addEventListener('click', removeConditionRow);
  });

  // Event delegation for handling remove button clicks
  document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('btn_remove')) {
      removeConditionRow(event);
    }
  });
});
